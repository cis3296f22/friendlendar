"use strict";
function homeContent() {

  // ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
  // 
  // NetBeans menu option "Source - Format" will not work with the text inside of a 
  // String, so you have to do this indentation manually with the editor. 

  var content = `

<h1>Friendlendar Home Page!</h1>
        
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

