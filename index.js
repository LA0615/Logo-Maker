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
    name: 'text color',
    message: 'Please enter a text color',
  },
  {
    type: 'list',
    name: 'shape list',
    message: 'Please choose a shape from the list.',
    choices :['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shape color',
    message: 'Please enter a color for your shape.',
  },
];

