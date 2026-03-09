const fs = require('fs');
const path = require('path');
const file = 'c:/Users/kdnya/OneDrive/Desktop/Albos Technologies/In house projects/albos-nextjs/app/services/iot-application-development-services/ClientPage.jsx';

let content = fs.readFileSync(file, 'utf8');

content = content.replace(/ChartLine/g, 'LineChart');
content = content.replace(/Microchip/g, 'Factory');

fs.writeFileSync(file, content);
console.log('Fixed icons in ClientPage.jsx');
