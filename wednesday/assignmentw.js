let tasks = [] 

while(true) {
  let choice = prompt('Enter 1 to add item, enter 2 to delete item, enter 3 to view all items, q to quit: ')

  if(choice == 'q') {
    break 
  }

  if(choice == '1') {
    let taskName = prompt('Enter task name: ')
    let taskPriority = prompt('Enter task priority: ')
    let task = { name: taskName, priority: taskPriority, id: tasks.length + 1}
    tasks.push(task)
  }
  else if(choice == '3') {
    for(let index = 0; index < tasks.length; index++)
    {
        console.log(`${tasks[index].id} ${tasks[index].name} ${tasks[index].priority}`)
    }
  }else if(choice == '2') {
    let id = prompt('Which item would you like to delete?: ')
    delete tasks[id -1]
  }
}
