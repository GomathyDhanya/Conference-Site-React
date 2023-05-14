import React from 'react'
import "./contactstyle.css"
function Contact() {
  return (
    <main>
        <header>
            <h1>Future Horizons</h1>
            <p>Exploring Tomorrow's Possibilities</p>
        </header>
        <div className="container">
            <div className='section'>
                <h1>Contact Us</h1>
                <p>If you have any questions or concerns about the conference, please do not hesitate to contact us. Our team is available to assist you with any inquiries that you may have.</p>
                <div className='support'>
                  <p className='con'>Support</p>
                  <div class="poc">
                      <span class="material-symbols-outlined symbol">call</span><p>+91 80085 80085</p>
                  </div>
                  <div class="poc">
                          <span class="material-symbols-outlined symbol">mail</span><p>future_horizons@gmail.com</p>
                  </div>

                </div>
                <div className='socials'>
                  <p className='con'>Socials</p>
                  <div class="poc">
                      <img src="./twitter.svg" width="30" height="30" /><p>@future_horizons</p>
                  </div>
                  <div class="poc">
                      <img src="./instagram.svg" width="30" height="30" /><p>@future_horizons</p>
                  </div>

                </div>
              
                  
            </div>
        </div>
      </main>
  )
}

export default Contact