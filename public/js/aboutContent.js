"use strict";

/** This class houses the function that generates the content for our about page 
 *  @type {class}
*/

/** This function uses javascript to generate the HTML & CSS for the about page 
 * @type {class}
 * @return - Returns an element containing the HTML and CSS
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

<div class="e">
<div class="centerwrapper">
<div class="gallery">
  <a target="_blank" href="https://media-exp1.licdn.com/dms/image/C5603AQG5l74pG1BrEQ/profile-displayphoto-shrink_800_800/0/1655486068496?e=2147483647&v=beta&t=qK2QrBgut71VuvnZ3-Ps-E15V14sRqkpNPuMM7en5ps">
    <img src="https://media-exp1.licdn.com/dms/image/C5603AQG5l74pG1BrEQ/profile-displayphoto-shrink_800_800/0/1655486068496?e=2147483647&v=beta&t=qK2QrBgut71VuvnZ3-Ps-E15V14sRqkpNPuMM7en5ps" alt="Gary Snipes" width="600" height="400">
  </a>
  <div class="desc">Hi I am Gary and I'm a senior Temple University. I am age 21 and my hometown is Scranton, PA. Yes, like The Office. I expect to graduate in Spring of 2023. I like computer science because of how much it is used in modern technology and how great of a tool it is to know in the 21st century. It also includes a lot of logical problem solving which I love to do. It is like a puzzle. I liked 
  Friendlendar because it was a webApp that uses a more modern component I want to learn. That being React. I felt like I could bring a lot to the table and I also liked the people I got to work with. In the future I'd like to work a steady software job to evolve my skills as well as travel and pursue my passion of music.</div>
</div>

<div class="gallery">
  <a target="_blank" href="https://media-exp1.licdn.com/dms/image/C4E03AQFcCdbXsidGpQ/profile-displayphoto-shrink_200_200/0/1617322440657?e=1675296000&v=beta&t=ZMRf9NZNFhc70n15DR95-SS2Bwipx4iqWjUaHXPvkPg">
    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFcCdbXsidGpQ/profile-displayphoto-shrink_200_200/0/1617322440657?e=1675296000&v=beta&t=ZMRf9NZNFhc70n15DR95-SS2Bwipx4iqWjUaHXPvkPg" alt="Dennis Lang" width="600" height="400">
  </a>
  <div class="desc"> Hi, I'm Dennis Shu Liang, age 20. My hometown is Gaborone, Botswana and I expect to graduate in the Spring of 2023. One thing I like about computer science is the career
  options I have access to. I wanted to work on Firendlendar because I really enjoyed working in the front end and I also learnt a lot about some frameworks and libraries such as React JS that I have been meaning to learn for a while.
  In the future I'd like to travel, job, etc: Work in the front end until I gain enough knowledge to work in the back end and then eventually become full stack. </div>
</div>

<div class="gallery"> 
  <a target="_blank" href="https://media-exp1.licdn.com/dms/image/D4E03AQFHjm-6k1BRVw/profile-displayphoto-shrink_800_800/0/1665503711876?e=2147483647&v=beta&t=ab5cg3efWLWwMAe7YXZtcAwa3hwxh7N8vWWIfkpQjSw">
    <img src="https://media-exp1.licdn.com/dms/image/D4E03AQFHjm-6k1BRVw/profile-displayphoto-shrink_800_800/0/1665503711876?e=2147483647&v=beta&t=ab5cg3efWLWwMAe7YXZtcAwa3hwxh7N8vWWIfkpQjSw" alt="Elizabeth Wescott" width="600" height="400">
  </a>
  <div class="desc">Hi, I am Elizabeth! I also go by Liz. I am a senior at Temple University, where I study computer science. I chose this field because I didn't know exactly what I wanted to do, and I figured it would be a good option to discover what I really want to do since technology is intertwined with everything in today's day and age. I should graduate this spring, May 2023, and after graduation, I will start at Cigna as an analyst in their Technology Early Career Development Rotational Program. Through this program, I hope to continue to grow as a developer and find a path best for me.
  Working on Friendlendar these past few weeks has been insightful and rewarding. I enjoyed learning new languages and technologies, working with my classmates, and overcoming obstacles every step of the way. </div>
</div>

<div class="gallery">
  <a target="_blank" href="https://cdn.discordapp.com/attachments/1033021350459224164/1046645875948142603/IMG_6881.jpg">
    <img src="https://cdn.discordapp.com/attachments/1033021350459224164/1046645875948142603/IMG_6881.jpg" alt="Lauren Kan" width="600" height="400">
  </a>
  <div class="desc">Hi! My name is Lauren Kan. I am 22 years old from Philly and I expect to graduate in May in 2023. I always liked learning languages, so I decided to try learning languages in computer science too. I liked Friendlendar because scheduling events with my friends and just scheduling events with several people was always difficult. Friendlendar would be a way to find a solution to the scheduling woes and make it easier to plan out events. I wanted to learn more about web development and this project was a starting point for me to do so. In the future, I would like to work in the Cybersecurity field and hope to travel to different countries.</div>
</div>

  <div class="gallery">
  <a target="_blank" href="https://cdn.discordapp.com/attachments/1041551309616205926/1046628706220781618/20220818_230941.jpg">
    <img src="https://cdn.discordapp.com/attachments/1041551309616205926/1046628706220781618/20220818_230941.jpg" alt="Ryan Auslander" width="600" height="400">
  </a>
  <div class="desc">Hi, my name is Ryan Auslander! I'm 22, and I was born and raised in Philadelphia. I'm a Computer Science student at Temple and I'm planning to graduate in the spring of 2023. I've always been interested in computer science as I loved video games and computers growing up. I love puzzles and problem solving, so once I actually got a taste of what computer science actually was like, I was completely sold. I really enjoyed Friendlendar as I struggle arranging plans with people constantly, and this is something I'd use in real life. The team behind it is also full of lovely people that I'm always excited to work with.</div>
</div>

<div class="gallery">
  <a target="_blank" href="https://cdn.discordapp.com/attachments/931700245476286545/1046564701573755020/John_Karas.jpg">
    <img src="https://cdn.discordapp.com/attachments/931700245476286545/1046564701573755020/John_Karas.jpg" alt="John Karas" width="600" height="400">
  </a>
  <div class="desc">Hi, I'm John Karas, a 22 year old from Hendersonville, TN. My expected graduation is Spring 2023. I love Computer Science because it's a tool I can use to create cool and unique programs. I specifically liked working on Friendlendar because it introduced me to front end development and UI design. After university, I hope to work remotely while pursing some of my other hobbies such as designing and sewing clothes.</div>
</div>

</div>
</div>

<style> 

div.e {
    text-align:center;
    margin: 0auto; 
}

div.centerwrapper {
    margin: 0 auto;
    width: 855pt;
   }

div.gallery {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
    display: inline-block;
  }
  
  div.gallery:hover {
    border: 2px solid #777;
  }
  
  div.gallery img {
    width: 100%;
    height: auto;
    border: 5px solid #9D2235;
    display: inline-block;
  }
  
  div.desc {
    padding: 10px;
    text-align: center;
    display: inline-block;
  }

h2 {
    color: #9D2235;
    text-align: center;
    font-size: xxx-large;

  }

h1 {
  color: #9D2235;
  text-align: center;
  font-size: xxx-large;
}

.column {
  width: 780px;
  padding: 15px;
  background-color: white;
  margin: 0 1rem;
  border-radius: 10px;
  border-color: #cb4a4a;
  text-align: justify;
}

.row {
  display: inline-flex;
  flex-wrap: wrap;
}
</style>

`;
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}