import React from 'react'
import Workcard from './Workcard'
import "./wsstyle.css"

function Workshops() {
  return (
    <main>
        <header>
            <h1>Future Horizons</h1>
            <p>Exploring Tomorrow's Possibilities</p>
        </header>
        <div className="container">
            <div className='workshops'>
                <h1>Workshops</h1>
                <p>Workshops are an important aspect of any conference or academic event. They provide an opportunity for attendees to engage in hands-on learning experiences, interact with experts in the field, and network with other attendees. Our workshops cover a wide range of topics and may include practical skills development, theoretical discussions, or research presentations. </p>
                <div className='events'>

                  <Workcard name="Introduction to Python for Data Science" date="10.06.2023" time="3.00 PM" description="This workshop will provide an introduction to Python and its application in data science. Participants will learn the basics of Python, data analysis, and visualization using data science libraries." image="./wsds.jpg"/>
                  <Workcard name="Virtual Reality for Education" date="10.07.2023" time="6.00 PM" description="Participants will explore virtual reality for education. They will learn about different VR technologies, how to design and develop VR educational content, and how to implement it in the classroom." image="./wsvr.jpg"/>
                  <Workcard name="Leadership and Communication" date="10.08.2023" time="4.00 PM" description="This workshop is on developing leadership skills in academic settings. Participants will learn about effective communication strategies, conflict resolution techniques, and leadership styles." image="./wslead.jpg"/>
                    
                </div>
            </div>
            
        </div>
    </main>
  )
}

export default Workshops