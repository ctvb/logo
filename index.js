const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');

const questions = [
    {
        type: 'input',
        message: 'What text?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What text colour',
        name: 'textColour',
    },
    {
        type: 'input',
        message: 'What shape colour?',
        name: 'shapeColour',
    },
    {
        type: 'list',
        message: 'What shape?',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
    },
];

function init() {
    return inquirer.prompt(questions).then(answers => {
        console.log(answers)
        let shape
        switch (answers.shape) {
            case 'circle':
                shape = new Circle()
                break;
            case 'triangle':
                shape = new Triangle()
                break;
            default: shape = new Square()
                break;
        }
        shape.setColor(answers.shapeColour)
        const svg = new SVG()
        svg.setShape(shape)
        svg.setText(answers.text, answers.textColour)
        return writeFile("logo.svg", svg.render());
    })
        .then(() => {
            console.log("Generated logo.svg");
        })
        .catch((error) => {
            console.log(error);
            console.log("Oops! Something went wrong.");
        });

    //     return fs.writeFile("logo.svg", svg.render(), (err) => err ?console.log(err):console.log("Success!"))
    // })
}

// Function call to initialize app
init();


// ikudosova@bootcampspot.com