"use strict";
function calendarContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h2>Calendar Page!</h2>
   
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
       
        <title>React App with Gary, John, Liz, Dennis, Lauren, and Ryan</title>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }