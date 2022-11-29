"use strict";
var account = {};

(function () {
    account.logon = function () {

        var display_cal = document.getElementById("root");
        display_cal.style.display = 'none';

        var userDiv = document.createElement("div");
        userDiv.classList.add("find");

        var userEmail = document.createElement('span');
        userEmail.innerHTML = "Email Address: ";
        userDiv.appendChild(userEmail);

        var userEmailInput = document.createElement("input");
        userDiv.appendChild(userEmailInput);

        var userPassword = document.createElement('span');
        userPassword.innerHTML = "Password: ";
        userDiv.appendChild(userPassword);

        var userPassInput = document.createElement("input");
        userPassInput.setAttribute("type", "password"); // so it shows dots not characters
        userDiv.appendChild(userPassInput);

        // Note: for this lab activity, you may want to comment out setting the input type to password, 
        // but you will certainly want to apply input type=password to the password text box 
        // when you implement your own log on code.

        var submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        userDiv.appendChild(submitButton);

        var msgDiv = document.createElement("div");
        userDiv.appendChild(msgDiv);

        submitButton.onclick = function () {

            console.log("API still in progress");
            // You have to encodeURI user input before putting into a URL for an AJAX call.
            // Otherwise, your URL may be refused (for security reasons) by the web server.
            /* var url = "webAPIs/logonAPI.jsp?email=" + escape(userEmailInput.value) + "&password=" + escape(userPassInput.value);
     
             console.log("onclick function will make AJAX call with url: " + url);
             msgDiv.innerHTML = ajax(url, processLogon, msgDiv);
             function processLogon(user) {
                 var message = "";
                 console.log("Successfully called the find API. Next line shows the returned object.");
                 console.log(user);
                 if (user.errorMsg.length > 0) {
                     message += "<strong>Error: " + user.errorMsg + "</strong>";
                 } else {
                     message += "<strong>Welcome User: " + user.webUserId + "</strong>";
                     message += "<p/><img src ='" + user.image + "'></p>";
                     message += "<br/>Birthday: " + user.birthday;
                     message += "<br/>MembershipFee: " + user.membershipFee;
                     message += "<br/>User Role: " + user.userRoleId + " " + user.userRoleType;
                 }
                 msgDiv.innerHTML = message;
             }/*/
        };
        return userDiv;
    };

    account.createNewAccount = function () {

        var display_cal = document.getElementById("root");
        display_cal.style.display = 'none';
        
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
            logoff.innerHTML = "<br>Logging Off";
            console.log("Logging Off")
        };

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