const os = require('os');

const {printName, lastName} = require('./printName');

printName(`Vinícius ${lastName}`);

console.log(os.cpus());