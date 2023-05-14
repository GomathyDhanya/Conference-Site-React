import React, { useState } from 'react';
import './CCstyles.css';

function CommitteeCard(props) {

  return (
    <div class="card">
    <div class="innercard">
        <div class="photo">
            <img src={props.photo} />
        </div>
        <div class="photodesc">
            <b>{props.name}</b>
            <p>{props.designation}</p>
        </div>
        <div class="namephoto">
            <p>{props.name}</p>
        </div>
    </div>
    </div>
  );
}

export default CommitteeCard;
