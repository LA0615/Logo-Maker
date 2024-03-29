class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  setColor(newColor) {
    this.textColor = newColor;
  }

  setText(newText) {
    this.text = newText;
  }

  setShapeColor(newColor) {
    this.shapeColor = newColor;
  }
}
//shape classes  and render function for each shape
class Circle extends Shape {
  constructor(shapeColor, text, textColor, radius) {
    super(shapeColor, text, textColor, "Circle");
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text> </svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor, width, height) {
    super(shapeColor, text, textColor, "Triangle");
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="200,10 300,210 110,210" fill="${this.shapeColor}" /> <text x="200" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor, sideLength) {
    super(shapeColor, text, textColor, "Square");
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="${this.shapeColor}" /> <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
  }
}

module.exports ={Circle, Triangle, Square};