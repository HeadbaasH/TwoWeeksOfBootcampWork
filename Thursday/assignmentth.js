class Groceries {
    constructor(stores) {
        this.stores = stores
        this.groceryList = []
    }
    addItem (item) {
        this.groceryList.push(item)  
    }
}

while(true) {
    let choice = (prompt('Enter 1 to add shopping list & to add item, enter 2 to view your list, enter x to quit:  '))

    if(choice == '1') {
        let stores = prompt('Where are we shopping today?: ')
        let newGroceryList = new Groceries(stores)
        while(true) {
        let userInput = prompt('what item would you like to add? Enter 2 to view list or enter q to quit to homepage: ')
        if(userInput == 'q') {
            console.log(newGroceryList.stores, newGroceryList)
            break
        } 
        else if (userInput == '2') {
            for (let i = 0; i < newGroceryList.groceryList.length; i++) {
                console.log(newGroceryList.groceryList[i])
            }
        }
        else {
    newGroceryList.addItem(userInput)
        }
    }
}
else if(choice == 'x') {
    break
}
}