let tasks = []

while(true) {

let choice = prompt('press 1 to enter tasks, 2 to delete tasks, 3 to view list, and q to quit: ')

if (choice == 'q') {
    break
}

if (choice == '1') {
    let taskName = prompt('enter the task to add: ')
    let taskPriority = prompt('enter importance of task (1-3): ')
    let task = {name: taskName, priority: taskPriority, id: tasks.length + 1}
    tasks.push(task)
}
else if (choice == '2') {
    let id = prompt('which item would you like to delete?: ')
    delete tasks[id - 1]
}
else if (choice == '3') {
    for (let index = 0; index < tasks.length; index++) 
    {
        console.log(`${tasks[index].id} ${tasks[index].taskName} ${tasks[index].taskPriority}`)
    }
}
}

let tasks = [] 

while(true) {
  let choice = prompt('Enter 1 to add item, enter 2 to delete item, enter 3 to view all items, q to quit')

  if(choice == 'q') {
    break 
  }

  if(choice == '1') {
    let taskName = prompt('Enter task name: ')
    let taskPriority = prompt('Enter task priority: ')
    let task = {name: taskName, priority: taskPriority }
    tasks.push(task)
  }
  else if(choice == '2') {
    let deleteOption = prompt('Which todo list item would you like to delete: ')
    if (deleteOption >= 1 && deleteOption <= tasks.length) {
        const deletedItem = tasks.splice(deleteOption - 1, 1)[0];
        console.log(`Item "${deletedItem}" has been deleted.`);
      } else {
        console.log('Invalid index.');
      }
  }
  else if(choice == '3'){
    for(let index = 0; index  < tasks.length; index++) {
            console.log(tasks)
  }
}
}