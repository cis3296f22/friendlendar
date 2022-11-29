//import logo from './logo.svg';
import './App.css';
//import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import CreateEventModal from './CreateEventModal';
import Event from './Event'
import { get } from './utils.js';

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

  const getEvents = async() => {
    get("/event").then(value => {
      setEventData(value.Dates);
    })
    console.log(eventData);
  }

  useEffect(() => {
    getEvents();
  }, [])
  console.log(eventData);

  const [toggle, toggleOn] = useState(true)

  return (

    <div className="App">{
        toggle ? <CreateEventModal date={date} closeModal={setShowModal} open={showModal} refetch={getEvents}></CreateEventModal> : null
      }{
        toggle ? <div className="centered">
          <Calendar onChange={setDate} value={date} onClickDay={(value) => dateClicked(value)} />
        </div> : null
      }
      <br></br>
      <div class="buttonHolder">
        <button onClick={() => toggleOn(!toggle)} data-cy="toggle">Toggle</button>
      </div>

      {/* <div>
          {eventData.map((data) => (
            <li key={data.start}>{data.start}</li>
          ))}
      </div> */}

      <div>
        {eventData.map((data) => (
          <Event key={data} event={data} refetch={getEvents}/>
        ))}
      </div>

    </div>
  );

}

export default App;
