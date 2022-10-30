//import logo from './logo.svg';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';


function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <Calendar onChange={onChange} value={value} />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
