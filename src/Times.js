import React from 'react'
import {useState} from 'react';
//import Calendar from 'react-calendar';
import './App.css';

const time = ['01:00','02:00','03:00','04:00','05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
'15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
   {time.map(times => {
    return (
    <div class="choices">
      <button onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <br></br>
    <div class="display_message">
      {info ? `Your event has been selected at ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;