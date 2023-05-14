import React from 'react'
import CommitteeCard from './ComitteeCard'
import "./comitteestyles.css"

function Comittee() {
    return (
        <main>
        <header>
            <h1>Future Horizons</h1>
            <p>Exploring Tomorrow's Possibilities</p>
        </header>
        <div className="container">
            <div className='comittee'>
                <h1>Our Comittee</h1>
                <p>Our committee members play a crucial role in bringing ideas to life and making important decisions that shape the direction of our conference. They bring a diverse set of skills, experiences, and perspectives to the table, working together towards a common goal, a Visionary future </p>
                <div className='members'>
                    <CommitteeCard name="James Karthic" designation="Chairman Future Horizons" photo="./members/d3.jpeg"/>
                    <CommitteeCard name="Prabavathi" designation="Senior Professor MIT" photo="./members/d4.jpeg"/>
                    <CommitteeCard name="Chandrasekar" designation="Senior Professor SSN" photo="./members/d5.jpeg"/>
                    <CommitteeCard name="Sai Kripa" designation="Senior Professor CEG" photo="./members/d6.jpeg"/>
                </div>
            </div>
        </div>
        </main>
    )
}

export default Comittee