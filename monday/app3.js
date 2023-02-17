let input = prompt('Input: ')

if(input % 15 == 0) {
    console.log('FizzBuzz');
}
else if(input % 3 == 0) {
    console.log('Fizz');
}
else if(input % 5 == 0) {
    console.log('Buzz');
}