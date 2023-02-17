class bankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance
        this.accountNumber = accountNumber
    }
deposit (amount) {
    this.balance += amount;
}
withdrawl (amount) {
    this.balance -= amount;
}
transferfunds (destinationAccount) {
    this.balance -= amount;
    destinationAccount.balance += amount;
}
}

let bofa = new bankAccount(100, 5)
let chase = new bankAccount(200, 6)

bofa.deposit(100)
console.log(bofa.balance)
bofa.withdrawal(50)
console.log(bofa.balance)
bofa.transfer(25, chase)
console.log(bofa.balance)
console.log(chase.balance)