import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            {/*can pass in headingStyle by <h1 style={StyleName}></h1> or by {{styles}} straight into JSX*/}
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}
//Functional Component

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
