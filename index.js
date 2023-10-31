const gracefulFS = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = required('inquirer');
const {Square, Circle, Triangle} = require('./lib/shapes');

class Svg{
    constructer(){
        this.shapesElement = ""
        this.textElement = ""
    }
    render(){
        return '<svg version=""'//I need to finish this
    }
    setShapesElement(shape){
        this.shapesElement = shape.render();
    }
    setTextElement(text){
        this.shapesElement = '<text x="150" y="125" font-size="60"';
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter a minimum of 3 characters for logo text.',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Enter a color keyword or hexadecimal number for text-color choice.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter a color keyword or hexadecimal number for shape-color choice.',
        choices: ['Triangle, Square, Circle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter a minimum of 3 characters for logo text.',
    },
];