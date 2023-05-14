import React from 'react'
import "./workcardstyle.css"


function Workcard(props) {
  return (
    <div class="wcard">
        <div class="wphoto">
            <div class="wpimg" style={{ backgroundImage: `url(${props.image})` }}></div>
        </div>
        <div class="wdesc">
            <div class="wdescinfo">
                <h3><b>{props.name}</b></h3>
                <p class="wdate">{props.date} | {props.time}</p>
                <p>{props.description}</p>
                
            </div>
        </div>
    </div>
  )
}

export default Workcard