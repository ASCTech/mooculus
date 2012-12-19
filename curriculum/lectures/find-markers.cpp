/*****************************************************************************************
Copyright 2011 Rafael Muñoz Salinas. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.

THIS SOFTWARE IS PROVIDED BY Rafael Muñoz Salinas ''AS IS'' AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Rafael Muñoz Salinas OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those of the
authors and should not be interpreted as representing official policies, either expressed
or implied, of Rafael Muñoz Salinas.
********************************************************************************************/

#include <iostream>
#include <fstream>
#include <sstream>
#include <map>

#include "aruco.h"
#include "cvdrawingutils.h"

#include <math.h>
#include <gsl/gsl_errno.h>
#include <gsl/gsl_spline.h>

using namespace cv;
using namespace aruco;

int lastFrame; // the index of the final frame in the video

string TheInputVideo;
string TheIntrinsicFile;
float TheMarkerSize=-1;
int ThePyrDownLevel;
MarkerDetector MDetector;
VideoCapture TheVideoCapturer;
vector<Marker> TheMarkers;
Mat TheInputImage,TheInputImageCopy;
CameraParameters TheCameraParameters;
void cvTackBarEvents(int pos,void*);
bool readCameraParameters(string TheIntrinsicFile,CameraParameters &CP,Size size);

pair<double,double> AvrgTime(0,0) ;//determines the average time required for detection
double ThresParam1,ThresParam2;
int iThresParam1,iThresParam2;
int waitTime=0;

typedef map<int, Marker> Markers;
std::map<int, Markers> AllMarkers;

/************************************
 *
 *
 *
 *
 ************************************/
bool readArguments ( int argc,char **argv )
{
    if (argc<2) {
        cerr<<"Invalid number of arguments"<<endl;
        cerr<<"Usage: (in.avi|live) [intrinsics.yml] [size]"<<endl;
        return false;
    }
    TheInputVideo=argv[1];
    if (argc>=3)
        TheIntrinsicFile=argv[2];
    if (argc>=4)
        TheMarkerSize=atof(argv[3]);

    if (argc==3)
        cerr<<"NOTE: You need makersize to see 3d info!!!!"<<endl;
    return true;
}
/************************************
 *
 *
 *
 *
 ************************************/
int main(int argc,char **argv)
{
    try
    {
        if (readArguments (argc,argv)==false) {
            return 0;
        }
        //parse arguments
        ;
        //read from camera or from  file
        if (TheInputVideo=="live") {
            TheVideoCapturer.open(0);
            waitTime=10;
        }
        else  TheVideoCapturer.open(TheInputVideo);
        //check video is open
        if (!TheVideoCapturer.isOpened()) {
            cerr<<"Could not open video"<<endl;
            return -1;

        }

        //read first image to get the dimensions
        TheVideoCapturer>>TheInputImage;

        //read camera parameters if passed
        if (TheIntrinsicFile!="") {
            TheCameraParameters.readFromXMLFile(TheIntrinsicFile);
            TheCameraParameters.resize(TheInputImage.size());
        }
        //Configure other parameters
        if (ThePyrDownLevel>0)
            MDetector.pyrDown(ThePyrDownLevel);


        //Create gui

	MDetector.getThresholdParams( ThresParam1,ThresParam2);
        MDetector.setCornerRefinementMethod(MarkerDetector::LINES);

	/*
        cv::namedWindow("thres",1);
        cv::namedWindow("in",1);
        iThresParam1=ThresParam1;
        iThresParam2=ThresParam2;
        cv::createTrackbar("ThresParam1", "in",&iThresParam1, 13, cvTackBarEvents);
        cv::createTrackbar("ThresParam2", "in",&iThresParam2, 13, cvTackBarEvents);
	*/
	
        char key=0;
        int index=0;
        //capture until press ESC or until the end of the video
        while ( key!=27 && TheVideoCapturer.grab() ) // && index <= 50)
        {
            TheVideoCapturer.retrieve( TheInputImage);
            //copy image

            index++; //number of images captured

            double tick = (double)getTickCount();//for checking the speed
            //Detection of markers in the image passed
            MDetector.detect(TheInputImage,TheMarkers,TheCameraParameters,TheMarkerSize);
            //chekc the speed by calculating the mean speed of all iterations
            AvrgTime.first+=((double)getTickCount()-tick)/getTickFrequency();
            AvrgTime.second++;
            //cout<<"Time detection="<<1000*AvrgTime.first/AvrgTime.second<<" milliseconds"<<endl;
	    
            //print marker info and draw the markers in image
            TheInputImage.copyTo(TheInputImageCopy);
            for (unsigned int i=0;i<TheMarkers.size();i++) {
	      if (AllMarkers.count( TheMarkers[i].id ) == 0)
		AllMarkers[TheMarkers[i].id] = map<int,Marker>();
	      AllMarkers[TheMarkers[i].id][index] = TheMarkers[i];
	      
	      cout<<index<<endl;
                cout<<TheMarkers[i]<<endl;
                TheMarkers[i].draw(TheInputImageCopy,Scalar(0,0,255),1);
            }
            //print other rectangles that contains no valid markers
       /**     for (unsigned int i=0;i<MDetector.getCandidates().size();i++) {
                aruco::Marker m( MDetector.getCandidates()[i],999);
                m.draw(TheInputImageCopy,cv::Scalar(255,0,0));
            }*/



            //draw a 3d cube in each marker if there is 3d info
            if (  TheCameraParameters.isValid())
                for (unsigned int i=0;i<TheMarkers.size();i++) {
                    CvDrawingUtils::draw3dCube(TheInputImageCopy,TheMarkers[i],TheCameraParameters);
                    CvDrawingUtils::draw3dAxis(TheInputImageCopy,TheMarkers[i],TheCameraParameters);
                }
            //DONE! Easy, right?
            cout<<endl<<endl<<endl;
            //show input with augmented information and  the thresholded image
            //cv::imshow("in",TheInputImageCopy);
            //cv::imshow("thres",MDetector.getThresholdedImage());

            //key=cv::waitKey(waitTime);//wait for key to be pressed
        }

	lastFrame = index;

    } catch (std::exception &ex)

    {
        cout<<"Exception :"<<ex.what()<<endl;
    }

    cout << "All done."<< endl;

    map<int, Markers>::const_iterator i;
    for( i = AllMarkers.begin(); i != AllMarkers.end(); ++i ) {
      int markerId = (*i).first;
      map<int, Marker> markers = (*i).second;

      int frameCount = markers.size();

      cout << "frameCount = " << frameCount << endl;

      std::vector<double> x(frameCount);
      std::vector<double> m0x(frameCount);
      std::vector<double> m0y(frameCount);
      std::vector<double> m1x(frameCount);
      std::vector<double> m1y(frameCount);
      std::vector<double> m2x(frameCount);
      std::vector<double> m2y(frameCount);
      std::vector<double> m3x(frameCount);
      std::vector<double> m3y(frameCount);
      std::vector<double> tx(frameCount);
      std::vector<double> ty(frameCount);
      std::vector<double> tz(frameCount);
      std::vector<double> rx(frameCount);
      std::vector<double> ry(frameCount);
      std::vector<double> rz(frameCount);

      map<int, Marker>::const_iterator j;
      int index = 0;
      for( j = markers.begin(); j != markers.end(); ++j, index++ ) {
	int frameIndex = (*j).first;
	Marker marker = (*j).second;

	x[index] = frameIndex;
	m0x[index] = marker[0].x;
	m0y[index] = marker[0].y;
	m1x[index] = marker[1].x;
	m1y[index] = marker[1].y;
	m2x[index] = marker[2].x;
	m2y[index] = marker[2].y;
	m3x[index] = marker[3].x;
	m3y[index] = marker[3].y;
	tx[index] = marker.Tvec.ptr<float>(0)[0];
	ty[index] = marker.Tvec.ptr<float>(0)[1];
	tz[index] = marker.Tvec.ptr<float>(0)[2];
	rx[index] = marker.Rvec.ptr<float>(0)[0];
	ry[index] = marker.Rvec.ptr<float>(0)[1];
	rz[index] = marker.Rvec.ptr<float>(0)[2];
	
	cout << frameIndex << endl;
      }

#define SPLINE(VAR) gsl_spline *spline_ ## VAR = gsl_spline_alloc (gsl_interp_cspline, frameCount); gsl_spline_init (spline_ ## VAR, &x[0], &VAR[0], frameCount)

      SPLINE(m0x);
      SPLINE(m0y);
      SPLINE(m1x);
      SPLINE(m1y);
      SPLINE(m2x);
      SPLINE(m2y);
      SPLINE(m3x);
      SPLINE(m3y);
      SPLINE(tx);
      SPLINE(ty);
      SPLINE(tz);
      SPLINE(rx);
      SPLINE(ry);
      SPLINE(rz);

      for( index = 0; index < lastFrame; index++ ) {

	double m0x = gsl_spline_eval (spline_m0x, index, NULL);
	double m0y = gsl_spline_eval (spline_m0y, index, NULL);
	double m1x = gsl_spline_eval (spline_m1x, index, NULL);
	double m1y = gsl_spline_eval (spline_m1y, index, NULL);
	double m2x = gsl_spline_eval (spline_m2x, index, NULL);
	double m2y = gsl_spline_eval (spline_m2y, index, NULL);
	double m3x = gsl_spline_eval (spline_m3x, index, NULL);
	double m3y = gsl_spline_eval (spline_m3y, index, NULL);
	double tx = gsl_spline_eval (spline_tx, index, NULL);
	double ty = gsl_spline_eval (spline_ty, index, NULL);
	double tz = gsl_spline_eval (spline_tz, index, NULL);
	double rx = gsl_spline_eval (spline_rx, index, NULL);
	double ry = gsl_spline_eval (spline_ry, index, NULL);
	double rz = gsl_spline_eval (spline_rz, index, NULL);

	cv::Point2f m0 = cv::Point2f(m0x,m0y);
	cv::Point2f m1 = cv::Point2f(m1x,m1y);
	cv::Point2f m2 = cv::Point2f(m2x,m2y);
	cv::Point2f m3 = cv::Point2f(m3x,m3y);

	std::vector<cv::Point2f> corners(4);
	corners[0] = m0;
	corners[1] = m1;
	corners[2] = m2;
	corners[3] = m3;
	
	Marker interpolated = Marker(corners, markerId);

	interpolated.Rvec.create(3,1,CV_32FC1);
        interpolated.Tvec.create(3,1,CV_32FC1);
	interpolated.Tvec.at<float>(0,0) = tx;
	interpolated.Tvec.at<float>(1,0) = ty;
	interpolated.Tvec.at<float>(2,0) = tz;
	interpolated.Rvec.at<float>(0,0) = rx;
	interpolated.Rvec.at<float>(1,0) = ry;
	interpolated.Rvec.at<float>(2,0) = rz;

	cout << index << endl;
	cout << interpolated << endl;
      }
      

      
      gsl_spline_free (spline_m0x);
      gsl_spline_free (spline_m0y);
      gsl_spline_free (spline_m1x);
      gsl_spline_free (spline_m1y);
      gsl_spline_free (spline_m2x);
      gsl_spline_free (spline_m2y);
      gsl_spline_free (spline_m3x);
      gsl_spline_free (spline_m3y);
      gsl_spline_free (spline_tx);
      gsl_spline_free (spline_ty);
      gsl_spline_free (spline_tz);
      gsl_spline_free (spline_rx);
      gsl_spline_free (spline_ry);
      gsl_spline_free (spline_rz);

      
      //map<int, Marker>::const_iterator j;
      
      
      
      //cout << "id = " << markerId << endl;

      
    }
    
    //cout << TheFrames << endl;
}
/************************************
 *
 *
 *
 *
 ************************************/

void cvTackBarEvents(int pos,void*)
{
    if (iThresParam1<3) iThresParam1=3;
    if (iThresParam1%2!=1) iThresParam1++;
    if (ThresParam2<1) ThresParam2=1;
    ThresParam1=iThresParam1;
    ThresParam2=iThresParam2;
    MDetector.setThresholdParams(ThresParam1,ThresParam2);
//recompute
    MDetector.detect(TheInputImage,TheMarkers,TheCameraParameters);
    TheInputImage.copyTo(TheInputImageCopy);
    for (unsigned int i=0;i<TheMarkers.size();i++)	TheMarkers[i].draw(TheInputImageCopy,Scalar(0,0,255),1);
    //print other rectangles that contains no valid markers
    /*for (unsigned int i=0;i<MDetector.getCandidates().size();i++) {
        aruco::Marker m( MDetector.getCandidates()[i],999);
        m.draw(TheInputImageCopy,cv::Scalar(255,0,0));
    }*/

//draw a 3d cube in each marker if there is 3d info
    if (TheCameraParameters.isValid())
        for (unsigned int i=0;i<TheMarkers.size();i++)
            CvDrawingUtils::draw3dCube(TheInputImageCopy,TheMarkers[i],TheCameraParameters);

    cv::imshow("in",TheInputImageCopy);
    cv::imshow("thres",MDetector.getThresholdedImage());
}


