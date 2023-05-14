import React from 'react'

function Navbar() {
  return (
    <nav>
      <div className='logo'>
      <span className="material-symbols-outlined" id="logosym">psychology</span>
      </div>
      <div className='navlinks'>
      <span className="material-symbols-outlined burger" id="burmenu">menu</span>
        <div className='links'>
          <a href="/">Home</a>
          <a href="/comittee">Comittee</a>
          <a href="/callforpapers">Call for papers</a>
          <a href="/importantdates">Important dates</a>
          <a href="/workshops">Workshops</a>
          <a href="/registration">Registration</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar