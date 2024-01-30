//class for shape color, text, type, and text color
class Shape {
    constructor(shapeColor, text, textColor, shapeType) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
      this.shapeType = shapeType;
    }
  
    render() {
      return `<div style="color: ${this.textColor}; background-color: ${this.shapeColor};">${this.text} (${this.shapeType})</div>`;
    }
  }
class Circle extends Shape {
  constructor(shapeColor, text, textColor, radius) {
    // Call the constructor of the parent class (Shape)
    super(shapeColor, text, textColor, "Circle");
    this.radius = radius;
  }

  render() {
    return `<svg>
      <circle cx="50" cy="50" r="${this.radius}" fill="${this.shapeColor}" />
      <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor, sideLength) {
    super(shapeColor, text, textColor, "Square");
    this.sideLength = sideLength;
  }
  render() {
    return `<svg>
      <circle cx="50" cy="50" r="${this.radius}" fill="${this.shapeColor}" />
      <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}
class Triangle extends Shape {
  constructor(shapeColor, text, textColor, width, height) {
    super(shapeColor, text, textColor, "Triangle");
    this.width = width;
    this.height = height;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
