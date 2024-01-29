const inquirer = require('inquirer');
const Shape = require('./lib/shapes.js');

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
    choices :['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a color for your shape.',
  },
];

