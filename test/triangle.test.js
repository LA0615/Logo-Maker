const { Triangle } = require('../lib/shapes.js');

it('should render output correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    triangle.setShapeColor('yellow');
    triangle.setText('LEA');
    
    const renderedOutput = triangle.render();
    
    expect(renderedOutput).toContain('<polygon points="200,10 300,210 110,210" fill="yellow" />');
    expect(renderedOutput).toContain('<text x="200" y="150" font-size="50" text-anchor="middle" fill="red">LEA</text>');
  });
  