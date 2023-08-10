// Code EyesOnMe Component Here
import React from 'react'

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.


function EyesOnMe () {
    function handleFocus () {
        console.log("Good!")
    }
    function handleBlur () {
        console.log("Hey! Eyes on me!")
    }

    return (<button onBlur= {handleBlur} onFocus = {handleFocus}>Eyes on me</button>
)
    
}

export default EyesOnMe