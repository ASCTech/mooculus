/****************************************************************
 *
 * Geometry package for Raphael
 * by Jim Fowler
 *
 ****************************************************************/

Raphael.el.make_draggable = function () {
    // storing original coordinates
    var start = function () {
	this.ox = this.attr("cx");
	this.oy = this.attr("cy");
	this.attr({opacity: 1});
    },

    // move will be called with dx and dy
    move = function (dx, dy) {
	this.attr({cx: this.ox + dx, cy: this.oy + dy});

	var d = this.descendents();
	for( var i in d ) {
	    d[i].show();
	}

	for( var i in d ) {
	    d[i].update();
	}

    },

    up = function () {
	this.attr({opacity: .5});
    };

    this.drag(move, start, up);
};

Raphael.el.make_draggable_along = function (along) {
    this.along = along;

    // storing original coordinates
    var start = function () {
	this.ox = this.attr("cx");
	this.oy = this.attr("cy");
	this.attr({opacity: 1});
    },

    // move will be called with dx and dy
    move = function (dx, dy) {
	this.attr(this.along.project_onto( this.ox + dx, this.oy + dy ));

	var d = this.descendents();
	for( var i in d ) {
	    d[i].show();
	}

	for( var i in d ) {
	    d[i].update();
	}

    },

    up = function () {
	this.attr({opacity: .5});
    };

    this.drag(move, start, up);
};


Raphael.el.is_hidden = function () {
    if (this.node.style.display == "none")
	return true;
    else
	return false;
}

Raphael.el.update = function () {
    this.updater();

    if (this.is_hidden()) {
	for( var i in this.children ) {
	    this.children[i].hide();
	}
    }
}

Raphael.el.descendents = function () {
    var result = [];

    for( var i in this.children ) {
	result = result.concat( [this.children[i]] );
	result = result.concat( this.children[i].descendents() );
    }

    return result;
};

Raphael.el.add_parents = function (parents) {
    for (var i in parents) {
	parents[i].add_child( this );
    }
}

Raphael.el.add_child = function (child) {
    this.children = [child].concat( this.children );
};

Raphael.fn.geometry = {
    point_radius: 7,

    point: function(x,y) {
	c = this.circle(x, y, this.geometry.point_radius).attr({
	    fill: "hsb(" + Math.random() + ", 1, 1)",
	    stroke: "none",
	    opacity: .5
	});
	
	c.kind = "point";
	c.make_draggable();
	c.children = [];
	return c;
    },

    project_onto_circle: function(circle,x,y) {
	var cx = circle.attr("cx");
	var cy = circle.attr("cy");
	var r = circle.attr("r");
	var d = Math.sqrt(Math.pow(cx - x,2) + Math.pow(cy - y,2));

	var nx = (x - cx) * r / d;
	nx = nx + cx;
	var ny = (y - cy) * r / d;
	ny = ny + cy;

	return {cx:nx, cy:ny};
    },

    project_onto_line: function(line,x,y) {
	var x1 = line.left.attr("cx");
	var y1 = line.left.attr("cy");
	var x2 = line.right.attr("cx");
	var y2 = line.right.attr("cy");
	
	var unit = ( (( x - x1 ) * ( x2 - x1 )) +
		     (( y - y1 ) * ( y2 - y1 )) ) / (Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
	if (Math.abs(unit) > 1000) {
	    unit = 0.5;
	}
	
	var nx = x1 + unit * (x2 - x1);
	var ny = y1 + unit * (y2 - y1);

	return {cx:nx, cy:ny};
    },

    point_on: function(along,x,y) {
	c = this.circle(x, y, this.geometry.point_radius).attr({
	    fill: "hsb(" + Math.random() + ", 1, 1)",
	    stroke: "none",
	    opacity: .5
	});
	
	c.kind = "point";
	c.make_draggable_along(along);
	c.updater = function() {
	    this.attr( this.along.project_onto( this.attr("cx"), this.attr("cy") ) );
	};
	c.updater();
	c.add_parents( [along] );
	c.children = [];
	return c;
    },

    point_reflected: function( line, point ) {
	c = this.circle(0, 0, this.geometry.point_radius).attr({
	    fill: "hsb(0,0,0)",
	    stroke: "none",
	    opacity: .5
	});
	c.toBack();

	c.point = point;
	c.line = line;
	c.kind = "point";
	c.updater = function() {
	    var x1 = this.line.left.attr("cx");
	    var y1 = this.line.left.attr("cy");
	    var x2 = this.line.right.attr("cx");
	    var y2 = this.line.right.attr("cy");
	    var dx = x2 - x1;
	    var dy = y2 - y1;

	    var x = this.point.attr("cx") - x1;
	    var y = this.point.attr("cy") - y1;


	    var nx = 2 * (dx * x + dy * y) * dx / (dx * dx + dy * dy) - x;
	    var ny = 2 * (dx * x + dy * y) * dy / (dx * dx + dy * dy) - y;

	    nx = nx + x1;
	    ny = ny + y1;

	    this.attr({cx:nx,cy:ny});
	};
	c.updater();
	c.add_parents( [point, line] );
	c.children = [];

	return c;	
    },

    circle: function(center,edge) {
	c = paper.circle(0,0,0).attr({
	    fill: "none",
	    stroke: "hsb(0,0,0)",
	    opacity: .5
	});
	c.toBack();

	c.edge = edge;
	c.center = center;
	c.kind = "circle";
	c.updater = function() {
	    this.attr({ cx: this.center.attr("cx"), cy: this.center.attr("cy"), r: distance(this.center,this.edge) });
	};
	c.updater();
	c.add_parents( [center, edge] );
	c.children = [];

	return c;
    },

    segment: function(a,b) {
	c = paper.path("").attr({
	    fill: "none",
	    stroke: "hsb(0,0,0)",
	    opacity: .5
	});
	c.toBack();

	c.left = a;
	c.right = b;
	c.kind = "line";
	c.updater = function() {
	    this.attr({ path: [ ['M', this.left.attr("cx"),  this.left.attr("cy") ],
				['L', this.right.attr("cx"),  this.right.attr("cy") ] ]});
	};
	c.updater();
	c.add_parents( [a, b] );
	c.children = [];

	return c;
    },     

    line: function(a,b) {
	c = paper.path("").attr({
	    fill: "none",
	    stroke: "hsb(0,0,0)",
	    opacity: .5
	});
	c.toBack();

	c.left = a;
	c.right = b;
	c.kind = "line";
	// BADBAD: these lines should be clipped here to speed up rendering on the ipad
	c.updater = function() {
	    var lx = this.left.attr("cx");
	    var ly = this.left.attr("cy");
	    var rx = this.right.attr("cx");
	    var ry = this.right.attr("cy");
	    var ax = lx - 100 * (rx - lx);
	    var ay = ly - 100 * (ry - ly);
	    var bx = rx + 100 * (rx - lx);
	    var by = ry + 100 * (ry - ly);
	    this.attr({ path: [ ['M', ax, ay ], ['L', bx, by ] ]});
	};
	c.updater();
	c.add_parents( [a, b] );
	c.children = [];

	return c;
    },      
 
    ray: function(a,b) {
	c = paper.path("").attr({
	    fill: "none",
	    stroke: "hsb(0,0,0)",
	    opacity: .5
	});
	c.toBack();

	c.left = a;
	c.right = b;
	c.kind = "line";
	c.updater = function() {
	    var lx = this.left.attr("cx");
	    var ly = this.left.attr("cy");
	    var rx = this.right.attr("cx");
	    var ry = this.right.attr("cy");
	    var bx = rx + 100 * (rx - lx);
	    var by = ry + 100 * (ry - ly);
	    this.attr({ path: [ ['M', lx, ly ], ['L', bx, by ] ]});
	};
	c.updater();
	c.add_parents( [a, b] );
	c.children = [];

	return c;
    },

    intersection_of_line_and_line: function(a,b) {
	var x1 = a.left.attr("cx");
	var y1 = a.left.attr("cy");
	var x2 = a.right.attr("cx");
	var y2 = a.right.attr("cy");
	var x3 = b.left.attr("cx");
	var y3 = b.left.attr("cy");
	var x4 = b.right.attr("cx");
	var y4 = b.right.attr("cy");
	var d = (x1-x2)*(y3-y4) - (y1-y2)*(x3-x4);
	if (Math.abs(d) < 0.00001) return null;
	
	var xi = ((x3-x4)*(x1*y2-y1*x2)-(x1-x2)*(x3*y4-y3*x4))/d;
	var yi = ((y3-y4)*(x1*y2-y1*x2)-(y1-y2)*(x3*y4-y3*x4))/d;

	return [ {cx: xi,cy: yi} ];
    },

    intersection_of_circle_and_line: function(circle,line) {
	var x3 = circle.attr("cx");
	var y3 = circle.attr("cy");
	var r = circle.attr("r");
	var x1 = line.left.attr("cx");
	var y1 = line.left.attr("cy");
	var x2 = line.right.attr("cx");
	var y2 = line.right.attr("cy");

	var a =  Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2);
	var b =  2 * ( (x2 - x1)*(x1 - x3) + (y2 - y1)*(y1 - y3) );
	var c = Math.pow(x3,2) + Math.pow(y3,2) + Math.pow(x1,2) + Math.pow(y1,2) - 2* ( x3*x1 + y3*y1 ) - Math.pow(r,2) ;
	var discriminant = b * b - 4 * a * c ;

	if (discriminant < 0.0)
	    return null;

	var mu = (-b + Math.sqrt( Math.pow(b,2) - 4*a*c )) / (2*a);
	var xi1 = x1 + mu*(x2 - x1);
	var yi1 = y1 + mu*(y2 - y1);

	var mu = (-b - Math.sqrt( Math.pow(b,2) - 4*a*c )) / (2*a);
	var xi2 = x1 + mu*(x2 - x1);
	var yi2 = y1 + mu*(y2 - y1);

	return [ {cx: xi1, cy: yi1}, { cx: xi2, cy: yi2 }];
    },

    intersection_of_line_and_circle: function(a,b) {
	return this.geometry.intersection_of_circle_and_line(b,a);
    },

    intersection_of_circle_and_circle: function(circle0,circle1) {
	var x0 = circle0.attr("cx");
	var y0 = circle0.attr("cy");
	var r0 = circle0.attr("r");
	var x1 = circle1.attr("cx");
	var y1 = circle1.attr("cy");
	var r1 = circle1.attr("r");

	/* dx and dy are the vertical and horizontal distances between
	 * the circle centers.
	 */
	var dx = x1 - x0;
	var dy = y1 - y0;

	/* Determine the straight-line distance between the centers. */
	var d = Math.sqrt((dy*dy) + (dx*dx));

	/* Check for solvability. */
	if (d > (r0 + r1))
	    /* no solution. circles do not intersect. */
	    return null;

	if (d < Math.abs(r0 - r1))
	    /* no solution. one circle is contained in the other */
	    return null;

	/* 'point 2' is the point where the line through the circle
	 * intersection points crosses the line between the circle
	 * centers.  
	 */

	/* Determine the distance from point 0 to point 2. */
	var a = ((r0*r0) - (r1*r1) + (d*d)) / (2.0 * d) ;

	/* Determine the coordinates of point 2. */
	var x2 = x0 + (dx * a/d);
	var y2 = y0 + (dy * a/d);

	/* Determine the distance from point 2 to either of the
	 * intersection points.
	 */
	var h = Math.sqrt((r0*r0) - (a*a));

	/* Now determine the offsets of the intersection points from
	 * point 2.
	 */
	var rx = -dy * (h/d);
	var ry = dx * (h/d);

	/* Determine the absolute intersection points. */
	var xi = x2 + rx;
	var xi_prime = x2 - rx;
	var yi = y2 + ry;
	var yi_prime = y2 - ry;

	return [ {cx:xi,cy:yi}, {cx:xi_prime,cy:yi_prime} ];
    },

    intersection: function(a,b) {
	c = this.circle(0, 0, this.geometry.point_radius).attr({
	    fill: "hsb(0,0,0)",
	    stroke: "none",
	    opacity: .5
	});
	c.toBack();

	var intersector = this.geometry['intersection_of_' + a.kind + '_and_' + b.kind];

	c.object1 = a;
	c.object2 = b;
	c.kind = "point";
	c.updater = function() {
	    var result = intersector(this.object1, this.object2);
	    if (result != null) {
		this.attr( result[0] );
		this.show();
	    } else {
		this.hide();
	    }
	};
	c.updater();
	c.add_parents( [a,b] );
	c.children = [];

	return c;
    },

    other_intersection: function(a,b) {
	c = this.circle(0, 0, this.geometry.point_radius).attr({
	    fill: "hsb(0,0,0)",
	    stroke: "none",
	    opacity: .5
	});
	c.toBack();

	var intersector = this.geometry['intersection_of_' + a.kind + '_and_' + b.kind];

	c.object1 = a;
	c.object2 = b;
	c.kind = "point";
	c.updater = function() {
	    var result = intersector(this.object1, this.object2);
	    if ((result != null) && (result.length > 1)) {
		this.attr( result[1] );
		this.show();
	    } else {
		this.hide();
	    }
	};
	c.updater();
	c.add_parents( [a,b] );
	c.children = [];

	return c;
    },

    midpoint: function(segment) {
	c = this.circle(0, 0, this.geometry.point_radius).attr({
	    fill: "hsb(0,0,0)",
	    stroke: "none",
	    opacity: .5
	});
	c.toBack();

	c.segment = segment;
	c.kind = "point";
	c.updater = function() {
	    this.attr( { cx: (this.segment.left.attr("cx") + this.segment.right.attr("cx")) / 2.0,
			 cy: (this.segment.left.attr("cy") + this.segment.right.attr("cy")) / 2.0 } );
	};
	c.updater();
	segment.add_child( c );
	c.children = [];

	return c;
    },

    triangle: function(p1,p2,p3) {
	c = paper.path("").attr({
	    fill: "hsb(0,0,0)",
	    stroke: "hsb(0,0,0)",
	    opacity: .2
	});
	c.toBack();

	c.p1 = p1;
	c.p2 = p2;
	c.p3 = p3;
	c.kind = "triangle";
	c.updater = function() {
	    this.attr({ path: [ ['M', this.p1.attr("cx"),  this.p1.attr("cy") ],
				['L', this.p2.attr("cx"),  this.p2.attr("cy") ],
				['L', this.p3.attr("cx"),  this.p3.attr("cy") ],
				['L', this.p1.attr("cx"),  this.p1.attr("cy") ] ] });
	};
	c.updater();
	c.add_parents( [p1,p2,p3] );
	c.children = [];

	return c;
    },     

    /* mark an angle */
    angle: function(p1,p2,p3) {
	c = paper.path("").attr({
	    fill: "none",
	    stroke: "hsb(0,0,0)",
	    opacity: 1
	});
	c.toBack();

	c.p1 = p1;
	c.p2 = p2;
	c.p3 = p3;
	c.kind = "angle";
	c.updater = function() {
	    var radius = 20;
	    var x2 = this.p2.attr("cx");
	    var y2 = this.p2.attr("cy");
	    var x1 = radius * (this.p1.attr("cx") - x2) / distance(p1,p2);
	    var y1 = radius * (this.p1.attr("cy") - y2) / distance(p1,p2);
	    x1 = x1 + x2;
	    y1 = y1 + y2;

	    var x3 = radius * (this.p3.attr("cx") - x2) / distance(p2,p3);
	    var y3 = radius * (this.p3.attr("cy") - y2) / distance(p2,p3);
	    x3 = x3 + x2;
	    y3 = y3 + y2;

	    var large_arc = 0;
	    var sweep_flag = 0;

	    if (((x1 - x2) * (y3 - y2) - (y1 - y2) * (x1 - x2)) >= 0)
		sweep_flag = 1;
	    else
		sweep_flag = 0;
	    // this is broken
	    this.attr({ path: [ ['M', x1, y1],
				['A', radius, radius, 0, large_arc, sweep_flag, x3, y3] ] });
	};
	c.updater();
	c.add_parents( [p1,p2,p3] );
	c.children = [];

	return c;
    },     


    label: function(point,text) {
	c = paper.text(0,0,text).attr({
	    fill: "hsb(0,0,0)",
	    stroke: "hsb(0,0,0)",
	    opacity: 1
	});
	c.toBack();

	c.point = point;
	c.kind = "label";
	c.updater = function() {
	    this.attr({ x: this.point.attr("cx"), y : this.point.attr("cy") });
	};
	c.updater();
	point.add_child( c );
	c.children = [];

	return c;
    },     

    calculation: function(x,y,objects,fn) {
	c = paper.text(x,y,"").attr({
	    fill: "hsb(0,0,0)",
	    stroke: "hsb(0,0,0)",
	    opacity: 1
	});
	c.toBack();

	c.calculator = fn;
	c.kind = "label";
	c.objects = objects
	c.updater = function() {
	    this.attr({ text: this.calculator(this.objects) });
	};
	c.updater();
	c.add_parents( objects );
	c.children = [];

	return c;
    },     

    };

function distance(a,b)
{
    return Math.sqrt( (a.attr("cx") - b.attr("cx"))*(a.attr("cx") - b.attr("cx")) + 
		      (a.attr("cy") - b.attr("cy"))*(a.attr("cy") - b.attr("cy")) );
}

Raphael.el.project_onto = function (x,y) {
    return Raphael.fn.geometry['project_onto_' + this.kind](this,x,y);
}
