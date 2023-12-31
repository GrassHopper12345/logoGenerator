const gracefulFS = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes");


class Svg {
    constructor() {
        this.shapesElement = ""
        this.textElement = ""
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapesElement} ${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapesElement(shape) {
        this.shapesElement = shape.render()
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
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Please enter a color keyword or hexadecimal number for shape-color.',
    },
];

function writeToFile(nameOfFIle, data) {
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
    let stringForSvg = "";
    let fileForSvg = "logo.svg";

    const answers = await inquirer.prompt(questions);
    let userTextInput = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userTextInput = answers.text;
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
    var userShapeInput;
    if (userShapeImage === "Triangle" || userShapeImage === "triangle") {
        userShapeInput = new Triangle();
        console.log("User shape-image selected as Triangle");
    } else if (userShapeImage === "Square" || userShapeImage === "square") {
        userShapeInput = new Square();
        console.log("User shape-image selected as Square");
    } else if (userShapeImage === "Circle" || userShapeImage === "circle") {
        userShapeInput = new Circle();
        console.log("User shape-image selected as Circle");
    } else {
        console.log("Error! Incorrect user shape!");
    }

    userShapeInput.setColors(userShapeColor);

    // creating a new svg file and setting elements to new file
    let svg = new Svg();
    svg.setShapesElement(userShapeInput);
    svg.setTextElement(userTextInput, userTextColor);
    stringForSvg = svg.render();

    // view shape in log
    console.log("Shape-image:\n\n" + stringForSvg);
    console.log("Shape Generated!");
    console.log("Writing to new file...");
    writeToFile(fileForSvg, stringForSvg);
}
initialize();