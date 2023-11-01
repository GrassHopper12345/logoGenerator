const gracefulFS = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = required('inquirer');
const { Square, Circle, Triangle } = require('./lib/shapes');


class Svg {
    constructer() {
        this.shapesElement = ""
        this.textElement = ""
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width='400" height="400"`//I need to finish this
    }
    setShapesElement(shape) {
        this.shapesElement = shape.render();
    }
    setTextElement(text, color) {
        this.shapesElement = '<text x="150" y="125" font-size="60" text-anchor="middle"/>';
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
        name: 'shape-image',
        message: 'Please select from the list below for shape of logo.',
        choices: ['Triangle, Square, Circle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Please enter a color keyword or hexadecimal number for shape-color.',
    },
];

writeToFile(nameOfFIle, data) => {
    console.log("Writing [" + data + "] to file [" + nameOfFIle + "]")
    gracefulFS.writeFile(nameOfFIle, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Congrats, you did it, you generated an svg logo file(logo.svg)!");
    });
}
async function initialize() {
    console.log("Initializing");
    let svgString = "";
    let svgFile = "logo.svg";

    const answers = inquirer.prompt(questions);
    let userTextInput = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userTextInput = amswers.text;
    } else {
        console.log("Error! Please input up to 3 characters and try again");
        return;
    }
    console.log("User text input: [" + userTextInput + "]");
    // user input for text-color
    userTextColor = answers['text-color'];
    console.log("User text-color input: [" + userTextColor + "]");
    // user input for shape-color
    userShapeColor = answers['shape-color'];
    console.log("User shape-color input: [" + userShapeColor + "]");
    // user inpur for shape-image
    userShapeImage = answers['shape-image'];
    console.log("User shape-image input: [" + userShapeImage + "]");

    // user shape if else statement
    let userShapeInput;
    if (userShape === "Triangle" || userShape === "triangle") {
        userShapeInput = new Triangle();
        console.log("User shape-image selected as Triangle");
    } else if (userShape === "Square" || userShape === "square") {
        userShapeInput = new Square();
        console.log("User shape-image selected as Square");
    } else if (userShape === "Circle" || userShape === "circle") {
        userShapeInput = new Circle();
        console.log("User shape-image selected as Circle");
    } else {
        console.log("Error! Incorrect user shape!");
    }

    userShapeInput.setColor(userShapeColor);

    // creating a new svg file and setting elements to new file

    let svg = new Svg();
    svg.setShapesElement(userTextInput, userShapeColor);)

}
initialize();