import React from 'react'
import RegistrationForm from './RegistrationForm'
import "./regstyle.css"

function Registration() {
  return (
    <main>
    <header>
        <h1>Future Horizons</h1>
        <p>Exploring Tomorrow's Possibilities</p>
    </header>
    <div className="container">
        <div className='comittee'>
            <h1>Registration form</h1>
            <p>To register for the conference, please complete the form below. We ask that you provide us with accurate and up-to-date information so that we can keep you informed of important updates and changes to the program.</p>
            <div className='regform'>

              <RegistrationForm />
                
            </div>
        </div>
    </div>
    </main>
  )
}

export default Registration