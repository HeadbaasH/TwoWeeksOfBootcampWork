class user {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

class address {
    constructor(street, city, state, zipCode) {
        this.street = street
        this.city = city
        this.state = state
        this,zipCode = zipCode
    }
}

user = new user('Noah', 'Wright')
for (let i = 0; i < address.myAddress.length; i++) {
    console.log(address.myAddress[i])
}
let myAddress = new address('6 Hollylaurel Dr.', 'Spring', 'TX', 77382)
let mySecondAddress = new address('7 Hollylaurel Dr.', 'spring', 'TX', 77381)


class user {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.addresses = []
    }
}

class address {
    constructor(street, city, state, zipCode) {
        this.street = street
        this.city = city
        this.state = state
        this,zipCode = zipCode
    }
}

let myUser = new user('Noah', 'Wright')

let myAddress = new address('6 Hollylaurel Dr.', 'Spring', 'TX', 77382)
let mySecondAddress = new address('7 Hollylaurel Dr.', 'spring', 'TX', 77381)

myUser.addresses.push(myAddress, mySecondAddress);
console.log(myUser.addresses);

for (let i = 0; i < myUser.addresses.length; i++) {
    console.log(myUser.addresses[i])
}