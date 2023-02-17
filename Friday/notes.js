// ARRAY HELPERS //

// .MAP HELPER
/* let numbers = [1, 2, 3, 4, 5]

let finalArray = numbers.map(function(no) {
    return no * 2
})

console.log(finalArray)

// .map is a function that gets used with another function

// map returns a brand new array, so it doesn't change the original

// .map function will take another function that will take an argument that will point to the items inside of the original array

// .map function must RETURN something 

//////////////////////////////////////////


// .FILTER HELPER

//Filter will only return true or false

let someNumbers = [1, 2, 3, 4, 5, 6, 11, 12, ]

let evenNumbers = someNumbers.filter(function(no) {
    return no % 2 == 0

// THE % IS A MOD OPERATOR

})

console.log(evenNumbers)

//////////////////////////////////////////

// .FIND HELPER

//Will also only return true or false

//.find can find any attribute of an array (so anything within the array)

let customers = ['alex', 'noah', 'steve']

let result = customers.find(function(name) {
    return name == 'steven'
})

console.log(result) */

///////////////////////////////////////////

let numbers = [1, 2, 3, 4, 5, 6]

let finalArray = numbers.map(function(no) {
    return no*2
})

console.log(finalArray)