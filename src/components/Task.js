import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ( {task, onDelete, onToggle} ) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id) }>
            <h3>{task.text}<FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}
//Individual element gets passed in from Tasks.js and text and day gets returned back up
//FaTimes is the cross icon which has its styles inside {{}}, and when icon has been clicked, onDelete function gets called which is passed all the way from App.js
//The id of the task being clicked on gets passed into onDelete as id
//When double clicking the task, onToggle function gets called with parameter id of the task that we are toggling
//If task reminder is true, then we have class reminder for styling, else there is no class for styling. task styling is always there.

export default Task
