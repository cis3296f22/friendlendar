"use strict";
var account = {};

(function(){
account.logon = function () {

   var userDiv = document.createElement("div");
    userDiv.classList.add("find");

    var content = `

    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3><img src="header.png" alt="header" style="width: 275px"></h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>

    <style>

    @import url(https://fonts.googleapis.com/css?family=Roboto:300);
    header .header{
    background-color: #fff;
    height: 45px;
    }
    header a img{
    width: 134px;
    margin-top: 4px;
    }
    .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    }
    .login-page .form .login{
    margin-top: -31px;
    margin-bottom: 26px;
    }
    .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    }
    .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background-color: #9D2235;
    background-image: linear-gradient(45deg,#9D2235,#9E4E23);
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    }
    .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
    }
    .form .message a {
    color: #9D2235;
    text-decoration: none;
    }

    .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
    }

body {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    body { 
        background-image: url('https://blog.drupa.com/wp-content/uploads/2015/11/Calendar-1000x605.jpg');
        background-size: cover;
        background-blend-mode: lighten;  
    }

    </style>
    `;
    userDiv.innerHTML += content;

    return userDiv;
};

account.createNewAccount = function () {
    
    /*var userDiv = document.createElement("div");
    userDiv.classList.add("find");
    
    var url = "webAPIs/getProfileAPI.jsp";
    console.log("getProfile makes AJAX call with url: " + url);
    
    var msgDiv = document.createElement("div");
    userDiv.appendChild(msgDiv);
    
    msgDiv.innerHTML = ajax(url, processProfile, msgDiv);
        function processProfile(user) {
           var message = "";
            console.log("Successfully called the find API. Next line shows the returned object.");
            console.log(user);
            if (user.errorMsg === "Error, not logged in") {
                message += "<strong>Error: " + user.errorMsg + "</strong>";
            } else {
                message += "<strong>Welcome User: " + user.webUserId + "</strong>";
                message += "<p/><img src ='" + user.image + "'></p>";
                message += "<br/>Birthday: " + user.birthday;
                message += "<br/>MembershipFee: " + user.membershipFee;
                message += "<br/>User Role: " + user.userRoleId + " " + user.userRoleType;
            }
            msgDiv.innerHTML = message;
        }
    return userDiv;*/
};

account.logoff = function () {

    var display_cal = document.getElementById("root");
    display_cal.style.display = 'none';

    var logoff = document.createElement("div");
    logoff.innerHTML = "Are You Sure?";
    
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Yes";
    logoff.appendChild(submitButton);

    submitButton.onclick = function () {
        logoff.innerHTML = "<br> Logging Off";
        console.log("Logging Off")
    };
    
    var content = `
    <style>

    body { 
        background-image: url('https://blog.drupa.com/wp-content/uploads/2015/11/Calendar-1000x605.jpg');
        background-size: cover;
        background-blend-mode: lighten;  
    }

    </style> 

    `;

    logoff.innerHTML += content;
    return logoff;
    /*
    var logOffDiv = document.createElement("div");
    logOffDiv.classList.add("find");
    var url = "webAPIs/logOffAPI.jsp";
    logOffDiv.innerHTML = ajax(url, processLogoff, logOffDiv);
    function processLogoff(user) {
         var message = "";
         if(user.errorMsg.length > 0){
             console.log("logging off");
             message += "<strong>Successfully logged off!</strong>";
         }else{
             console.log("failed to log off");
             message += "<strong>Logging Off!</strong>";
         }
         logOffDiv.innerHTML = message;
     }
    return logOffDiv;*/
};



}());