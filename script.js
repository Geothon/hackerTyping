//makes the textbox change size when text exceeds limit
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}

let darkmode = "true"
let plaintext = "false"
let username = localStorage.getItem("username")
localStorage.setItem("username", username);
let mainScreen = document.getElementById("main-screen")
mainScreen.style.display = "none";
let startScreen = document.getElementById("start-screen")
startScreen.style.display = "none";
let beginningScreen = document.getElementById("beginningScreen")
usernameInputBox = document.getElementById("usernameInputBox")
let usernameDisplay = document.getElementById("usernameDisplay")
let mainTextbox = document.getElementById("mainText")
let outputBox = document.getElementById("outputBox")
let body = document.getElementById("body")
let dogBackground = document.getElementById("dog-background")
dogBackground.style.display = "none";


//check if username is already been submitted on website before, doesn't show start screen if it has
function start(){
  if(localStorage.getItem("username") == ""){
  mainScreen.style.display = "none";
  beginningScreen.style.display = "none"
  startScreen.style.display = "block";
  } else if (!localStorage.getItem("username") == "") {
  startScreen.style.display = "none";
  beginningScreen.style.display = "none"
  mainScreen.style.display = "block";
  username = localStorage.getItem("username");
  usernameDisplay.innerHTML = username
  }
}


function submitUsername(){
  username = usernameInputBox.value 
  localStorage.setItem("username", username);
  startScreen.style.display = "none";
  mainScreen.style.display = "block";
  usernameDisplay.innerHTML = username
}


//an array for the help command
const commandList = ["test", "textcolor (red, green, blue, or plain)", "lightmode (type darkmode to change this back)", "hi or hello", "background dog (type background clear to change this back)", "change username"];



function submit(){
  if (mainTextbox.value == "test") {
    outputBox.innerHTML = "Command Successful"
  } else if (mainTextbox.value == "textcolor green"){
    mainTextbox.style.color="rgb(0, 150, 0)"
    plaintext = "false"
    outputBox.innerHTML = "Command Successful"
  } else if (mainTextbox.value == "textcolor blue"){
    mainTextbox.style.color="rgb(0, 80, 200)"
    plaintext = "false"
    outputBox.innerHTML = "Command Successful"
  } else if (mainTextbox.value == "textcolor red"){
    mainTextbox.style.color="rgb(200, 0, 0)"
    plaintext = "false"
    outputBox.innerHTML = "Command Successful"
  } else if (mainTextbox.value == "textcolor plain" & darkmode == "true"){
    mainTextbox.style.color="rgb(200, 200, 200)"
    plaintext = "true"
    outputBox.innerHTML = "Command Successful"      
  } else if (mainTextbox.value == "textcolor plain" & darkmode == "false") {
    mainTextbox.style.color="rgb(0, 0, 0)"
    plaintext = "true"
    outputBox.innerHTML = "Command Successful"    
  } else if (mainTextbox.value == "lightmode"){
    if (plaintext == "false"){
    body.style.background="rgb(255, 255, 255)"
    mainTextbox.style.background="rgb(255, 255, 255)"
    outputBox.style.background="rgb(255, 255, 255)"
    outputBox.style.color="rgb(0, 0, 0)"
    usernameDisplay.style.color="rgb(0, 0, 0)"
    darkmode = "false"
    outputBox.innerHTML = "Command Successful"      
    } else if (plaintext == "true") {
      body.style.background="rgb(255, 255, 255)"
      mainTextbox.style.background="rgb(255, 255, 255)"
      mainTextbox.style.color="rgb(0, 0, 0)"
      outputBox.style.background="rgb(255, 255, 255)"
      outputBox.style.color="rgb(0, 0, 0)"
      usernameDisplay.style.color="rgb(0, 0, 0)"
      darkmode = "false"
      outputBox.innerHTML = "Command Successful"  
    }
  } else if (mainTextbox.value == "darkmode"){
    if (plaintext == "false"){
    body.style.background="rgb(48, 46, 46)"
    mainTextbox.style.background="rgb(48, 46, 46)"
    outputBox.style.background="rgb(48, 46, 46)"
    outputBox.style.color="rgb(200, 200, 200)"
    usernameDisplay.style.color="rgb(200, 200, 200)"
    darkmode = "true"
    outputBox.innerHTML = "Command Successful"      
    } else if (plaintext == "true"){
    body.style.background="rgb(48, 46, 46)"
    mainTextbox.style.background="rgb(48, 46, 46)"
    mainTextbox.style.color="rgb(200, 200, 200)"
    outputBox.style.background="rgb(48, 46, 46)"
    outputBox.style.color="rgb(200, 200, 200)"
    usernameDisplay.style.color="rgb(200, 200, 200)"
    darkmode = "true"
    outputBox.innerHTML = "Command Successful"          
    }
  } else if (mainTextbox.value == "hi"){
    outputBox.innerHTML = "Hello " + username +"!"
  } else if (mainTextbox.value == "hello"){
    outputBox.innerHTML = "Hello " + username +"!"
  } else if (mainTextbox.value == "background dog"){
    dogBackground.style.display = "block";
    outputBox.innerHTML = "Command Successful"
  } else if (mainTextbox.value == "background clear"){
    dogBackground.style.display = "none";
    outputBox.innerHTML = "Command Successful"
  } else if (mainTextbox.value == "help"){
    var i = Math.floor(6*Math.random())
    outputBox.innerHTML = "try typing " + commandList[i]
  } else if (mainTextbox.value == "change username"){ 
  username = prompt('What is your new username?');
  alert("Username changed to " + username);
  localStorage.setItem("username", username);
  usernameDisplay.innerHTML = username
  }  else {
    outputBox.innerHTML = "Command Not Recognized"
  }
    mainTextbox.value = ""
}

function clearOutput (){
  outputBox.innerHTML = ""
  clearTimeout(clearOutput)
}