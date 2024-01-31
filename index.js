const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

// Shape questions with text and color options
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text.',
      validate: (input) => {
        if (input.length > 3) {
          return 'Must be no more than 3 characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter a text color',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Please choose a shape from the list.',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter a color for your shape.',
    },
  ])

  // if-else statement for setting the different shapes that the user inputs
  .then((data) => {
    let shape;

    if (data.shapeType === 'Circle') {
      shape = new Circle();
    } else if (data.shapeType === 'Square') {
      shape = new Square();
    } else {
      shape = new Triangle();
    }

    shape.setColor(data.textColor);
    shape.setText(data.text);
    shape.setShapeColor(data.shapeColor);

    // Write the data file for the svg logo
    fs.writeFile('logo.svg', shape.render(), (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });


