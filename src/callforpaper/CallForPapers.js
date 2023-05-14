import React from 'react'
import Topic from './Topic'
import "./copstyles.css"

function CallForPapers() {
  return (
    <main>
        <header>
            <h1>Future Horizons</h1>
            <p>Exploring Tomorrow's Possibilities</p>
        </header>
        <div className="container">
            <div className='section'>
                <h1>Call For Papers</h1>
                <p>We invite all researchers and scholars to submit papers for consideration to our upcoming conference. We are seeking innovative and thought-provoking research that explores new perspectives and advances knowledge in a wide range of fields. We welcome papers that address pressing social, economic, and environmental challenges, as well as those that push the boundaries of traditional academic disciplines. </p>
                <div className='papers'>
                  <Topic topic="Artificial Intelligence" description="AI has the potential to revolutionize many aspects of our lives, from healthcare and transportation to entertainment and finance. Machine learning, natural language processing, and computer vision are just a few examples of the cutting-edge technologies that underpin AI." />
                  <Topic topic="Internet of Things" description=" IoT has the potential to transform many aspects of our lives, from smart homes and cities to industrial automation and healthcare. By collecting and analyzing data from a wide range of sources, IoT devices can provide real-time insights and drive improvements in efficiency, productivity, and sustainability." />
                  <Topic topic="Computer Networks" description="Computer networks can be used for a variety of purposes, including business applications, academic research, entertainment, and social networking. The Internet is the largest computer network in the world, connecting millions of devices across the globe. Computer networking is an essential aspect of modern society, enabling individuals and organizations to access information, collaborate, and innovate on a global scale. " />
                  <Topic topic="Mathematics" description=" It is a fundamental tool for understanding and analyzing many real-world phenomena, from physics and engineering to finance and economics. Mathematics is a constantly evolving field that is driven by innovation, creativity, and rigor. It provides a language for expressing complex ideas in a precise and concise manner, making it an essential tool for scientific research and technological innovation." />
                  <Topic topic="Nanotechnology" description="Nanotechnology has the potential to revolutionize many areas, from medicine and energy to materials science and electronics. Nanotechnology could lead to the development of new and more efficient energy sources, as well as new diagnostic and therapeutic tools for healthcare." />
                  <Topic topic="Biotechnology" description="Biotechnology is rapidly advancing and has the potential to transform many areas of society, from food production and agriculture to healthcare and environmental sustainability. Biotechnology is already being used to develop new medicines, renewable energy sources, and more sustainable food production methods." /> 
                </div>
                <h1>Guidelines</h1>
                <ul>
                  <li>Follow the submission guidelines: Make sure to carefully read and follow the submission guidelines provided by the conference or journal. This may include instructions on formatting, length, and style.</li>
                  <li>Choose a relevant topic: Choose a topic that is relevant to the conference or journal's theme or scope. This will increase the chances of your paper being accepted for presentation or publication.</li>
                  <li>Conduct thorough research: Conduct thorough research on the topic and ensure that your paper is grounded in the relevant literature. This will help to demonstrate the novelty and significance of your research.</li>
                  <li>Use clear and concise language: Use clear and concise language to communicate your ideas effectively. Avoid jargon or overly technical language that may be difficult for readers to understand.</li>
                  <li>Provide evidence to support your claims: Support your claims with evidence from the literature or your own research. This will help to strengthen the credibility and validity of your arguments.</li>
                  <li>Proofread and edit your paper: Carefully proofread and edit your paper to ensure that it is free of errors and typos. Consider having someone else review your paper as well to provide feedback and catch any mistakes.</li>
                  <li>Submit on time: Make sure to submit your paper before the deadline provided by the conference or journal. Late submissions may not be accepted for review or may be given lower priority.</li>
                </ul>

            </div>
        </div>
      </main>
  )
}

export default CallForPapers