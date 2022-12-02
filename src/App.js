//import logo from './logo.svg';
import './App.css';
//import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import CreateEventModal from './CreateEventModal';
import Event from './Event'
import { get } from './utils.js';

/**
 * 
 * @return - the calendar application, modal and the toggle button
 * @type {class}
 */
function App() {

  /**
   * @type {object}
   * @constant 
   * date stores the date that the user clicks on to bring up the modal
   */
  const [date, setDate] = useState(new Date());
  // const [showTime, setShowTime] = useState(false);
  /**
   * @type {object}
   * @constant
   * showModal is the object that displays the modal to enter event information along with setShowModal that initialises the object
   */
  const [showModal, setShowModal] = useState(false);
   /**
   * @type {object}
   * @constant
   * eventData is the object that stores the event information that the user enters
   */
  const [eventData, setEventData] = useState([])

  /**
   * 
   * @param value - value that is stored into date object when a date is clicked
   * This function displays the modal once a user has clicked a date on the calendar 
   */
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

  /**
   * @constant
   * uses a get request to constantly update the user events
   */
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

  /**
   * @type {object}
   * @constant
   * toggle that displays the calendar onto the page or hides it
   */
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
