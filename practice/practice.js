//question 1: Write a program that iterates over an array of numbers and outputs the sum of all the numbers in the array.

/*num = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < num.length; i++) {
    sum += num[i]
}
console.log(sum)*/

// question 2: Write a program that iterates over an array of strings and outputs the length of each string.

/*let friends = ['curran', 'evan', 'brandon']
for(let i = 0; i < friends.length; i++) {
console.log(friends[i].length)
}*/

// question 3: Write a program that iterates over an array of numbers and outputs the largest number in the array. 

/*num = [134, 52, 2, 19, 654]

largest = num[0]

for(let i = 0; i < num.length; i++) {
    if(largest < num[i]) {
        largest = num[i]
    }
}
console.log(largest) */

class BankAccount {
    constructor (balance, owner) {
        this.balance = balance
        this.owner = owner
    }
    deposit (amount) {
        this.balance += amount;
    }
    withdrawl (amount) {
        this.balance -= amount;
    }
    transfer (amount, destinationAccount) {
        this.balance -= amount;
        destinationAccount.balance += amount;
    }
}

let bofa = new BankAccount('Noah')
let chase = new BankAccount('Haon')

bofa.deposit(100)
bofa.withdrawl(50)
bofa.transfer(50, chase)