import React from 'react'
import "./topicstyle.css"

function Topic(props) {
  return (
    <details>
        <summary>{props.topic}</summary>
        <p>{props.description}</p>
    </details>
  )
}

export default Topic