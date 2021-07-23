import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/*can pass in headingStyle by <h1 style={StyleName}></h1> or by {{styles}} straight into JSX*/}
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}
//Functional Component
//when the button gets clicked, we call the prop onAdd which calls the function to set the form show hide state to the opposite of current state
//when showAdd is true (add form is displayed), button text says close, else it says add

Header.defaultProps = {
    title: 'Task Tracker'
}
//Default props for title would be Task Tracker if nothing has been passed in under App.js

Header.propTypes = {
    title: PropTypes.string
}
//propType of the title must be a string; if something else has been passed in, there will be a warning

/*const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}*/
//CSS styles in JS

export default Header
