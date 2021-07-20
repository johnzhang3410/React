import React from 'react'
import Task from './Task'

const Tasks = ( {tasks, onDelete, onToggle } ) => {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
        </>
    )
}
//Current array is {tasks} parameter and for each element of the array, call Task.js with its parameter being the individual elements
//{task} is individual elements of the array which gets passed down as parameter task into Task.js which diplays the task text and date

export default Tasks
