var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.
function Rectangle(sideLength, sideWidth, color) { // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
	Shape.call(this, 4, color)
	this.l = sideLength
	this.w = sideWidth
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.perimeter = function(){return this.l * 2 + this.w * 2}
Rectangle.prototype.area = function(){ return this.l * this.w}


module.exports = Rectangle;
