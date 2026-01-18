function printName(name) {
    console.log(`Name: ${name}`);
}
// exports.printName = (name) => {
//     console.log(`Name: ${name}`);
// }

const lastName = 'Führ de Borba';
// exports.lastName = 'Führ de Borba';

module.exports = { printName, lastName };