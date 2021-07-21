//Followed Youtube React Crash Course for this project, original author of code goes to Traversy Media

import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    ])
  //useState takes in the initial states, tasks is the current state, and setTasks is the function that updates tasks

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
//Setting tasks to filtered tasks
//we filter the tasks array. id is the task id that we want to delete, and task.id is the same thing. Since they are always the same, they won't pass the function. 
//When new array is created by filter()， the elements that we want to delete won't exist anymore.
//If every element's id is not the same as the id being passed in (the id of the task that we are trying to delete)
//return tasks that has a different id from the task id being passed in (the id that we are trying to delete) Unselected tasks gets to stay in the filtered array

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}
//For every element in the tasks array, if the element id is the same as the id being passed in, it means we want to toggle that particular task, therefore we 
//set reminder to whatever opposite of task.reminder has
//if nothing is passed in (no doubleClick), just display task normally

  return (
    <div className="container">
      <Header />
      {/*props can be defined within its component (Ex. title={1} or title='String' ), defaultProps will appear if not specified */}
      {/*The component Header contains the header which is made up of a title as well as a button component */}
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />  : 'No tasks to show'}
      {/*current state tasks array gets passed down as parameter into Tasks.js and the array get looped displaying all the texts */}
      {/*The function deleteTask gets passed down as parameter onDelete to Tasks.js which gets further passed down to Task.js */}
      {/*if the number of tasks is bigger than 0, show Tasks. Else show 'No tasks to show' */}
    </div>
  );
}

/*class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}*/
//Class Component

export default App;
