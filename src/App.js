//import logo from './logo.svg';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Event from './Event.js';


function App() {
  //const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 
  // return (
  //   <><div className="App">
  //     <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
  //     <header className="App-header">
  //     </header>
  //   </div><div>
  //       <Event showTime={showTime} date={date} />
  //     </div></>

  // );

  return (
    <div className="App">
      <h1 className="App-header">Friendlendar</h1>
      <div className="Calender-alignment">
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
