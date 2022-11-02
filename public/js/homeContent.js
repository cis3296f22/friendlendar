"use strict";
function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h2>Friendlendar Home Page!</h2>
   
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#48135D" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
       
        <title>React App with Gary, John, Liz, Dennis, Lauren, and Ryan</title>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }