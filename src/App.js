//import logo from './logo.svg';
import './App.css';
//import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Event from './Event.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Modal = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    <span> Modal content </span>
  </Popup>
);


function App() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 

  return (
    <div className="App">
      <h1 className="App-header">Friendlendar</h1>

    <div>
    <Modal />
    </div>

      <div className="centered">
       <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
      </div>
   
      {date.length > 0 ? (
      <p>
        <span>Start:</span>
        {date[0].toDateString()}
        &nbsp;
        &nbsp;
        <span>End:</span>{date[1].toDateString()}
      </p>
             ) : (
      <p>
         <span>Default selected date:</span>{date.toDateString()}
      </p> 
             )
      }
      <Event showTime={showTime} date={date}/>
   
    </div>
     );

}

export default App;
