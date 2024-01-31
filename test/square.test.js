const { Square } = require('../lib/shapes.js');

it('should render output correctly', () => {
    const square = new Square();
    square.setColor('red');
    square.setShapeColor('yellow');
    square.setText('LEA');
    
    const renderedOutput = square.render();
    
    expect(renderedOutput).toContain('<rect width="100%" height="100%" fill="yellow" />');
    expect(renderedOutput).toContain('<text x="100" y="125" font-size="60" text-anchor="middle" fill="red">LEA</text>');
  });
  