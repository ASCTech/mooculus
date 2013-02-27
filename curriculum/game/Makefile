PREFIX=/usr/local
OPENCV_CFLAGS=-I$(PREFIX)/include/opencv -I$(PREFIX)/include
OPENCV_LIBS=$(PREFIX)/lib/libopencv_calib3d.so $(PREFIX)/lib/libopencv_contrib.so $(PREFIX)/lib/libopencv_core.so $(PREFIX)/lib/libopencv_features2d.so $(PREFIX)/lib/libopencv_flann.so $(PREFIX)/lib/libopencv_gpu.so $(PREFIX)/lib/libopencv_highgui.so $(PREFIX)/lib/libopencv_imgproc.so $(PREFIX)/lib/libopencv_legacy.so $(PREFIX)/lib/libopencv_ml.so $(PREFIX)/lib/libopencv_nonfree.so $(PREFIX)/lib/libopencv_objdetect.so $(PREFIX)/lib/libopencv_photo.so $(PREFIX)/lib/libopencv_stitching.so $(PREFIX)/lib/libopencv_ts.so $(PREFIX)/lib/libopencv_video.so $(PREFIX)/lib/libopencv_videostab.so  

%.o: %.cpp
	gcc -O3 -c $< $(OPENCV_CFLAGS) `pkg-config --cflags gsl` -I$(PREFIX)/include/aruco

OBJS=main.o

main: $(OBJS)
	gcc -O3 -o main $(OBJS) -lGL -lGLU -lm  -lglut -pg $(OPENCV_LIBS) `pkg-config --libs gsl` -laruco

clean:
	rm -f *.o
	rm -f main
