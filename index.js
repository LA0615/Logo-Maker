const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');


//Shape questions with text and color options
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text.',
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
    choices :['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a color for your shape.',
  },
];

function init() {
    //Prompt the user with questions and collect responses
    inquirer
      .prompt(questions)
      .then((data)  => {
        const myShape = new Shape(data.shapeColor, data.text, data.shapeType, data.textColor);
        console.log(myShape.render());
      })
      .catch((error) => {
        console.log('Error occured:', error);
    });
 }
 //Call the function to initialize the app
init();
