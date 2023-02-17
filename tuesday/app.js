/*let names = ['curran', 'evan', 'alex', 'brandon', 'george']

for(let index = names.length - 1; index >= 0; index--) {
    console.log(names[index])
} */

let friendsArray = []

while (true) {
    let friends = prompt("Enter a friend's name here: ")
    friendsArray.push(friends); 

    let choice = prompt('Enter q to quit or any key to continue: ')

    if (choice == 'q') {
        break
    }
}

console.log(friendsArray)