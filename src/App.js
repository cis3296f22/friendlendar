//import logo from './logo.svg';
import './App.css';
//import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import CreateEventModal from './CreateEventModal';
import {post,  returnPostData} from './utils.js';


function App() {
  const [date, setDate] = useState(new Date());
  // const [showTime, setShowTime] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState([])
  const dateClicked = (value) => {
    setShowModal(true)
    setDate(value)
  }

  
  //console.log(dateObject);
  //let dataObjectSaved = dateObject;

  //dateObject.then(value =>{
  //  console.log(value);
  //  dataObjectSaved = value;
  //})

  
  //console.log(dataObjectSaved);

  //const dataArray = [{date: "jan 1", filledIn: true}, {}, {}]

  //Pulling from user database
  // const getDateInfoForAll = () => {
  //   //call api to get the stuff => Data
  //   setEventData(Data)
  // }

  useEffect(() => {
    returnPostData().then(value =>{
      setEventData(value.Dates);
    })
  }, [])

  console.log(eventData[0]);
  
  const [toggle,toggleOn]=useState(true)

  return (
    
    <div className="App">{
      toggle?<h1 className="App-header">Friendlendar</h1>:null
    }{
      toggle?<CreateEventModal date={date} closeModal={setShowModal} open={showModal}></CreateEventModal>:null
    }{
      toggle?<div className="centered">
       <Calendar onChange={setDate} value={date} onClickDay={(value) => dateClicked(value)}/>
      </div>:null
    }
      <div class="buttonHolder">
      <button onClick={()=> toggleOn(!toggle)}>Toggle</button>
      </div>


      <ul>
        {eventData.map(artist => (
          <li key={artist.start}>
            {artist.start}{' '}
            <button onClick={() => {
              setEventData(
                eventData.filter(a =>
                  a.start !== artist.start
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
     );

}

export default App;
