const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { generateSVG, writeSVG } = require('./lib/svgGenerator');

async function promptUser() {
    const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: input => input.length <= 3 || 'Text must be 3 characters or less.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or a hexadecimal number for the text color:'
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or a hexadecimal number for the shape color:'
        }
    ]);

    let shape;
    switch (shapeType) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }

    shape.setColor(shapeColor);
    const svgContent = generateSVG(shape, text, textColor);
    writeSVG('logo.svg', svgContent);
}

promptUser();
