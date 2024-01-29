
class Shape {
    constructor (shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.shapeType = shapeType;
    }
    render(){
        return `<p>${this.shapeColor}</p>`;
    }
}

//const myShape = new Shape('blue' , 'hello', 'black');
//myShape.shapeColor;
//myShape.render();