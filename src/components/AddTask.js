import React from 'react'
import {useState} from 'react'

const AddTask = ( {onAdd} ) => {
    const [text, setText] = useState ('')
    const [day, setDay] = useState ('')
    const [reminder, setReminder] = useState (false)
    //The original text/day which is empty is the original value for input, use setText/setDay to change text/day
    //The original reminder is set to false (Checkbox unchecked)

const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
        alert('Please add a task')
        return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
}
//This function gets called when we are submitting the add-form
//if there is no task text, then we pop an alert
//If there indeed is input, then we call onAdd to add the task with its inputs of text, day, and reminder (T/F)
//after adding the task to task array, we reset everything to their default state (no text/day in inputs, and reminder set to false)

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
                {/* When user tries to change the text, we use setText with new text being what is entered */ }
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
                {/* When changes happen to the input, we change day by setDay to the value entered (The value of event target) */ }
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder} />
            </div>
                {/* when user makes change to the checkbox, we use setReminder to change the box to whatever the current target is (true or false) */ }
                {/*the checkbox will be checked when reminder is true, else it will be unchecked (reminder false (default)) */ }
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
