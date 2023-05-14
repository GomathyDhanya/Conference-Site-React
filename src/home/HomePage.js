import React from 'react'
import './homecss.css'
function HomePage() {
    return (
    <main>
        <header>
            <h1>Future Horizons</h1>
            <p>Exploring Tomorrow's Possibilities</p>
        </header>
        <div className="container">
            <div className="half left">
                <img src="./home.jpeg" />
            </div>
            <div className="half right">
                <h1>Our Mission</h1>
                <p>The future is full of possibilities, and it's important to stay ahead of the curve to keep up with the latest innovations and trends. That's why Future Horizons is such an exciting concept - it's all about exploring what tomorrow might hold and preparing for it today.</p>
                <p>Future Horizons is a conference that brings together thought leaders, industry experts, and curious individuals to explore the possibilities of the future. From emerging technologies to new business models and beyond, this conference is a platform for sharing ideas and insights that can help shape the future.</p>
            </div>
            <div className='hometab'>
                <p>At our conference, we believe that innovation is a key driver of progress and growth, and we are committed to fostering an environment that encourages scholars to innovate and share their ideas.
                We understand that innovation is not easy, and it requires creativity, risk-taking, and a willingness to challenge the status quo. That's why our conference is designed to provide a platform for scholars to share their innovative ideas and learn from other experts in their field. </p>
                <p>We believe that by bringing together scholars from different disciplines and backgrounds, we can foster new collaborations and inspire innovative thinking that can lead to positive change and development.
                If you are a scholar with an innovative idea that can make a difference in the world, we invite you to join us at our conference and be part of a community that celebrates and encourages innovation.</p>
            </div>
        </div>
    </main>
    )
}

export default HomePage