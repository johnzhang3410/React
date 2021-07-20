import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    return (
        <div>
            <button onClick={onClick}
            style={{backgroundColor:color}} 
            className='btn'
            >{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}
//color would be steelblue if no color props are passed-in in parent file Header.js, same with text

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func,
}
//Will show warnings if text or color has been passed in a value with type other than string

export default Button
