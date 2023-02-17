let firstResponse = prompt('What is your first name?: ')
let secondResponse = prompt('What is your last name?: ')

let response = {
    firstName: firstResponse, lastName: secondResponse }

console.log(`My name is ${response.lastName}, ${response.firstName}`)