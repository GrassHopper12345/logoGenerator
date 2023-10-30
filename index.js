const gracefulFS = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = required('inquirer');
const {Square, Circle, Triangle} = require('./lib/shapes');

class Svg{
    constructer(){
        this.shapesElement = ""
        this.textElement = ""
    }
    render(){
        return '<svg version="'
    }
}

const questions = {
    {
        type: 'input',
        name: 'text',
        message: 'Enter a minimum of 3 characters for logo text.',
    },
    {
        
    },
};