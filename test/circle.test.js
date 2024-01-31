const { Circle } = require('../lib/shapes.js');

describe('Circle', () => {
  it('should instantiate circle class and set color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.textColor).toBe('blue');
  });

  it('should render output correctly', () => {
    const circle = new Circle();
    circle.setColor('red');
    circle.setShapeColor('yellow');
    circle.setText('LEA');
    
    const renderedOutput = circle.render();
    
    expect(renderedOutput).toContain('<circle cx="150" cy="100" r="80" fill="yellow" />');
    expect(renderedOutput).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red"> LEA</text>');
  });
  
  
});


  
