$.extend(KhanUtil, {
    
    //takes num and returns +1 if num>0 or -1 if num<0
    steveSign: function(num){
        return num && num/Math.abs(num)
    },
    
     opSign: function(A,B){
     	return KhanUtil.steveSign(A) == -KhanUtil.steveSign(B)
     },
    
    // Approximates a root of f on the interval (xmin,xmax) by successively halving the interval.
    
    displayMode: function(x){
									if (KhanUtil.toFraction(x)[1] == 1){
										return x
										}
									else return "\\frac{"+KhanUtil.toFraction(x)[0]+"}{" + KhanUtil.toFraction(x)[1]+"}"
									
									},
    
    steveRoot: function(f,xmin,xmax){
        var l = xmin
        var r = xmax
        var z = 0
        for (var i=0;i<10;i++){
            z = (l + r)/2
            if (KhanUtil.steveSign(f(l)) == KhanUtil.steveSign(f(z))){ l = z}
            else{r = z}   
          
        }
        return z
    },
    
   
    
    steveBisectionList: function(f,xmin,xmax){
        var l = xmin
        var r = xmax
        var z = 0
        var list = []
        for (var i=0;i<10;i++){
            z = (l + r)/2
            list.push(z)
            if (KhanUtil.steveSign(f(l)) == KhanUtil.steveSign(f(z))){ l = z}
            else{r = z}   
          
        }
        return list
    },
    
    goober: function(n,f){
    	var list = []
        for (var i=0;i<10;i++){
            if (i>n){
                list.push(f(i))
            }
        }
       
        return list
        
    },
    
    //takes a function and a list of abscissas, and returns an array of zeros - one zero between each pair of abscissas that are of
    //opposite sign
    locateZeros: function(f,abscissas){
        var len = abscissas.length
        var list = []
        var z = 0
        
        for(var i=0;i<len-1;i++){
           var x0 = abscissas[i]
           var x1 = abscissas[i+1]
           var y0 = f(x0)
           var y1 = f(x1)
           
           if (KhanUtil.steveSign(y0) !== KhanUtil.steveSign(y1)){
               z = KhanUtil.steveRoot(f,x0,x1)
               list.push(z)
           }
         
        }
        return list
    },
    
        steveCubic: function(x){return -Math.pow(x,3)/2+3*x/2},
    
    //niceFunction is a C^1 function which connects the points in "points".  It is designed to be used 
    //in my "curveSketchingIntuition" exercise.  Every point in the "points" will have 0 slope, except the first and last point.
    niceFunction: function(x,points){
        
        var len = points.length
        
        var x1 = points[0][0]
        var x2 = points[1][0]
        var y1 = points[0][1]
        var y2 = points[1][1]
        var k = (y1 - y2)/Math.pow(x1-x2,2)
        
        if (x<x2){return k*Math.pow(x-x2,2)+y2}
        
        for (var i=1;i<len-2;i++){
            var x1 = points[i][0]
            var x2 = points[i+1][0]
            var y1 = points[i][1]
            var y2 = points[i+1][1]
            
            xNew = (x-x1)*2/(x2-x1)-1
            yNew = (KhanUtil.steveCubic(xNew)+1)*(y2-y1)/2+y1
            if (x>=x1 && x<x2){return yNew}
           
            }
        
        
        var x1 = points[len-2][0]
        var x2 = points[len-1][0]
        var y1 = points[len-2][1]
        var y2 = points[len-1][1]
        var k = (y2 - y1)/Math.pow(x1-x2,2)
        if (x>=x1){return k*Math.pow(x-x1,2)+y1}
        
    },
    
   makeXList: function(){
    var array = [-10]
    var i=0
    while(array[i]<10){
    	x = array[i]+3*KhanUtil.randRange(1,3)
    	if (x<10){array.push(x)}
    	i=i+1
        }
	array.push(10)
	return array
    
    },
    
    makeYList:function(min,max,n){
        var excluded = [0]
        var array = [KhanUtil.randRangeExclude(min,max,excluded)]
        excluded.push(array[0])
        array.push[KhanUtil.randRangeExclude(min,max,excluded)]
        excluded = [0]
        for (var i=1;i<n;i++){
            if (array[i-2]<array[i-1]){
                array.push(KhanUtil.randRangeExclude(min,array[i-1]-1,excluded))
                }
            else{array.push(KhanUtil.randRangeExclude(array[i-1]+1,max,excluded))}
            }
        
        return array
    
    },
    
        makeCoordinates:  function(array1,array2){
        var array = []
        for (var i=0;i<array1.length;i++){
            array.push([array1[i],array2[i]])
        }
        return array
    },
    
    
    //numerically integrates a function f over the interval [a,b]
	numInt: function(f,a,b){
		var delta = .01
		var sum = 0
		var i = 0
		if (a<=b){
		while ((a+delta*i)<=b)
		
			{sum = sum+delta*f(a+i*delta)
			 i++
			}
		return sum}
		if (a>b){return -KhanUtil.numInt(f,b,a)}
		},
    
    minDistanceToSet: function(a,list){
    	
    	if (list.length == 0){
    		return 1000;
    		}
    	var dist = Math.abs(list[0] - a)
    	if (list.length !== 0) {
    		for (var i=0;i<list.length;i++){
    			if (Math.abs(list[i]-a) < dist){
    				dist = Math.abs(list[i]-a)
    				}
    				
    			}
    		return dist
    		}
    	
    	},
    
    minDistanceBetweenSets: function(list, array){
    	
    	if (list.length ==0 || array.length ==0){
    		return 1000;
    		}
    	var dist = KhanUtil.minDistanceToSet(list[0],array)
    	if (list.length !== 0 && array.length !==0) {
    		for (var j=0;j<list.length;j++){
    			if (KhanUtil.minDistanceToSet(list[j],array) < dist){
    					dist = KhanUtil.minDistanceToSet(list[j],array);
    				}
    			}	
    		return dist;
    		}
    		
    	},
    
    randFunction: function(depth, operations,vars){
    		var i = KhanUtil.randRange(0,operations.length-1);
    		var operator = operations[i];
    		if (depth>0){
    			if (operator == "+"){
    				return "("+KhanUtil.randFunction(depth-1,operations,vars) + "+" + KhanUtil.randFunction(depth-1,operations,vars) +")"
    				}
    			else if (operator == "-"){
    				return "("+KhanUtil.randFunction(depth-1,operations,vars) + "-" + KhanUtil.randFunction(depth-1,operations,vars) +")"
    				}
    			else if (operator == "*"){
    				return "("+KhanUtil.randFunction(depth-1,operations,vars) + "*" + KhanUtil.randFunction(depth-1,operations,vars) +")"
    				}
    			else if (operator == "/"){
    				return "("+KhanUtil.randFunction(depth-1,operations,vars) + "/" + KhanUtil.randFunction(depth-1,operations,vars) +")"
    				}
    			else if (operator == "^"){
    				return "("+KhanUtil.randFunction(depth-1,operations,vars) + "^" + KhanUtil.randFunction(depth-1,operations,vars) +")"
    				}
    			else if (operator == "power"){
    				return KhanUtil.randFunction(depth-1,operations,vars) + "^" + KhanUtil.randRange(2,8)
    				}
    			else if (operator =="coefficient"){
    				return KhanUtil.randRangeExclude(-10,10,[0,1]) + "*" + KhanUtil.randFunction(depth-1,operations,vars)
    				}
    			else if (operator=="constant"){
    				return  "("+KhanUtil.randFunction(depth-1,operations,vars) + "+" + KhanUtil.randRangeExclude(-10,10,[0])+")"
    				}
    			else {
    				return "("+operator + "(" + KhanUtil.randFunction(depth-1,operations,vars) +"))"
    				}
    			}
    		if (depth ==0){
    			var k = KhanUtil.randRange(0,vars.length-1);
    			return vars[k]
    			}
    		},
    	
    	
    
    //////////////////////////

    //The following two functions were used in previous prototypes of my 
    //exercises, but I have not used them.  Maybe they are useful to someone.
    

    
    
    // an implementation of Newton's method. Takes a function and an approximate zero, returns a better approximation.
    newtonRoot: function(f,a){
        var z = a
        var m = (f(z+.01)-f(z-.01))/.02
        for(var i=0;i<2;i++){
            z = z-f(z)/m
            m = (f(z+.01)-f(z-.01))/.02
        }
        return z
    },
});