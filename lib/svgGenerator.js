const fs = require('fs');

function generateSVG(shape, text, textColor, link) {
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <a href="${link}" target="_blank">
                ${shape.render()}
                <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
            </a>
        </svg>
    `;
}

function writeSVG(fileName, svgContent) {
    fs.writeFileSync(fileName, svgContent);
    console.log(`Generated ${fileName}`);
}

module.exports = { generateSVG, writeSVG };

