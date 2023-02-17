// QUESTION 1

/*let numbers = [1, 2, 3, 4, 5, 6]

let finalArray = numbers.map(function(no) {
    return no*2
})

console.log(finalArray) */

// QUESTION 2

 /*let string = ['noah', 'john', 'scott', 'evan']

let newString = string.map(function(name) {
    return name.toUpperCase()
})
console.log(newString) */

//QUESTION 3

let cars = [
    { make: 'chevy', model: 'cobalt', year: 2007 },
    { make: 'honda', model: 'accord', year: 2008 }
]

let carName = cars.filter(function(name) {
    return cars.make
})

console.log(carName)