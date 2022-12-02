"use strict";

/** Generates the HTML & CSS for some of the Calender's main page */
function calendarContent () {

  var display_cal = document.getElementById("root");
  display_cal.style.display = 'block';
// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h1>Calendar</h1>
   
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
       
        <title>React App with Gary, John, Liz, Dennis, Lauren, and Ryan</title>

        <style>
        
        body { 
            background-image: url('https://blog.drupa.com/wp-content/uploads/2015/11/Calendar-1000x605.jpg');
            background-size: cover;
            background-blend-mode: lighten;  
       }
       
       h1 {
         color: #9D2235;
         text-align: center;
         font-size: xxx-large;
       }

       </style>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }