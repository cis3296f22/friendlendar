"use strict";
/**
 *  Retrieves a single file by id.
 *
 */
function aboutContent() {  //developed using w3 schools

    var display_cal = document.getElementById("root");
    display_cal.style.display = 'none';

    // ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
    // 
    // NetBeans menu option "Source - Format" will not work with the text inside of a 
    // String, so you have to do this indentation manually with the editor. 

    var content = `

<h2>About Page</h2>
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

<img src="img/squad.jpg" alt="Squad feat. Gary, Liz, Dennis, John, Ryan, and Lauren" style="width:1000px;height:600px;background-color: white;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);display: block;margin-left: auto;margin-right: auto; border-radius: 10px;" >
&nbsp; 

<h2>Meet the Team!</h2>

<h4>Gary, Dennis, Liz, Lauren, Ryan, and John.</h4>


<div class="Scriptcontent">

<link href="https://fonts.googleapis.com/css?family=Poppins:700|Raleway" rel="stylesheet">

<div class="row">

<div class="column">
<a href="img/lauren.jpg">
<div class="container">
<img src="img/lauren.jpg" class="image">
<div class="overlay">
<div class="text">Hi! My name is Lauren Kan. I am 22 years old from Philly. I liked Friendlendar because scheduling events with my friends and just scheduling events with several people was always difficult. I wanted to learn more about web development and this project was a starting point for me to do so.</div>
</div>
</div>
</a>
</div>

<div class="column">
<a href="img/ryan.jpg">
<div class="container">
<img src="img/ryan.jpg" class="image">
<div class="overlay">
<div class="text">Hi, my name is Ryan Auslander! I'm 22, and I was born and raised in Philadelphia. I really enjoyed Friendlendar as I struggle arranging plans with people constantly, and this is something I'd use in real life. The team behind it is also full of lovely people that I'm always excited to work with.</div>
</div>
</div>
</a>
</div>

<div class="column">
<a href="img/John_Karas.jpg">
<div class="container">
<img src="img/John_Karas.jpg" class="image">
<div class="overlay">
<div class="text">Hi, I'm John Karas, a 22 year old from Hendersonville, TN. I specifically liked working on Friendlendar because it introduced me to front end development and UI design.</div>
</div>
</div>
</a>
</div>

</div>

<div class="row">


<div class="column">
<a href="img/liz.jpg">
<div class="container">
<img src="img/liz.jpg" class="image">
<div class="overlay">
<div class="textLiz">Hi, I am Elizabeth! I also go by Liz. Working on Friendlendar these past few weeks has been insightful and rewarding. I enjoyed learning new languages and technologies, working with my classmates, and overcoming obstacles every step of the way.</div>
</div>
</div>
</a>
</div>
<div class="column">
<a href="img/dennis.jpg">
<div class="container">
<img src="img/dennis.jpg" class="image">
<div class="overlay">
<div class="text">Hi, I'm Dennis Shu Liang, age 20. My hometown is Gaborone, Botswana. I wanted to work on Firendlendar because I really enjoyed working in the front end and I also learnt a lot about some frameworks and libraries such as React JS that I have been meaning to learn for a while.</div>
</div>
</div>
</a>
</div>
<div class="column">
<a href="img/gary.jpg">
<div class="container">
<img src="img/gary.jpg" class="image">
<div class="overlay">
<div class="text">Hi I am Gary and I'm a senior Temple University. I am age 21 and my hometown is Scranton, PA. Yes, like The Office. ct to graduate in Spring of 2023. I liked Friendlendar because it was a webApp that uses a more modern component I want to learn. That being React. I felt like I could bring a lot to the table and I also liked the people I got to work with.</div>
</div>
</div>
</a>
</div>

</div>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  flex: 100%;
  max-width: 100%;
}

.column img {
  vertical-align: middle;
}

.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  
}

.overlay {
  position: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: black;
}

.container:hover .overlay {
  opacity: 0.9;
}

.text {
  color: white;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 15%;
  left: 10%
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.textLiz {
  color: black;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 15%;
  left: 10%
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

/* Tablet Styles */
@media only screen and (min-width: 480px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
}
 
/* Desktop Styles */
@media only screen and (min-width: 1024px) {
    .column {
      flex: 33.3%;
      max-width: 33.3%;
    }
}

</style>

`;
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}