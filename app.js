<<<<<<< HEAD
//Importing All Neccessery Element

let logInBtn = document.getElementById("logInBtn");  //NavBar Login Btn
let closeBtn = document.getElementById("closeBtn");  //LogIn Close Btn
let logForm = document.getElementById("logForm");    //LogIn Form Containing Div
let bgForm = document.getElementById("bgForm");      //Background of Every Form 
let signForm = document.getElementById("signForm");  //SignUp form
let signLogBtn = document.getElementById("logIn");   //LogIn buttton in SignUp Form
let createAccBtn = document.getElementById("createAcc"); //Create Acc btn in LogIn Form
let signUpCloseBtn = document.getElementById("closeBtnSignUp"); //SignUp Close Btn
let bodyHide = document.body; //body Element for Scrolling Issue 

//Logic Stands Here
function hideScrollBar(){
  bodyHide.style.position = "fixed"; //Hides Scroll Bar 
}
function unhideScrollBar(){
  bodyHide.style.position = "absolute"; //UnHides Scroll Bar
}
function openFormBG(){
  bgForm.style.top = "0%";
  hideScrollBar();  //Opens Backgorund of the Forms
}
function closeFormBG(){
  bgForm.style.top = "-150%";
  unhideScrollBar();  //Closes Backgorund of the Forms
}
function openLogIn(){
  logForm.style.top = "50%"
  openFormBG();             //Opens The LogIn Form & Opens formBG
}
function closeLogIn(){
  logForm.style.top = "-150%";      //Closes  The LogIn Form & formBG
  closeFormBG();
  unhideScrollBar();
}
function closeLogInOnCreateAcc(){
  logForm.style.top = "-150%"; 
  openCreateAcc();              //Closes LogIn & Opens Create Acc Form
}
function openCreateAcc(){
  signForm.style.top = "50%";    //Opens Create Acc Form After Closing LogIn Form
}
function closeCreateAccOnLogIn(){
  signForm.style.top = "-150%"; 
  openLogInOnCreateAcc();       //Closes Create Acc Form & Openis LogIn Form
}
function openLogInOnCreateAcc(){
  logForm.style.top = "50%";      //Open LogIn Form After Closing Create Acc Form
}
function closeCreateAcc(){
  signForm.style.top = "-150%";  //Closes Create Acc Form After clicking Cross Button
  closeFormBG();
}

//Events Starts Here

logInBtn.addEventListener("click", openLogIn);  //Opens LogIn Form after clicking Nav LogIn Btn
createAccBtn.addEventListener("click", closeLogInOnCreateAcc); //Closes LogIn Form & Opens SignUp Form After clicking LogIn Create Acc Btn 
signLogBtn.addEventListener("click", closeCreateAccOnLogIn); //Closes SigUp Form & Opens LogIn form After Clicking Log In Btn 
closeBtn.addEventListener("click", closeLogIn);   //closes LogIn form after Clicking cross btn
signUpCloseBtn.addEventListener("click", closeCreateAcc);  //closes SignUp form After Clicking SignUp Cross Btn
=======
//Importing All Neccessery Element

let logInBtn = document.getElementById("logInBtn");  //NavBar Login Btn
let closeBtn = document.getElementById("closeBtn");  //LogIn Close Btn
let logForm = document.getElementById("logForm");    //LogIn Form Containing Div
let bgForm = document.getElementById("bgForm");      //Background of Every Form 
let signForm = document.getElementById("signForm");  //SignUp form
let signLogBtn = document.getElementById("logIn");   //LogIn buttton in SignUp Form
let createAccBtn = document.getElementById("createAcc"); //Create Acc btn in LogIn Form
let signUpCloseBtn = document.getElementById("closeBtnSignUp"); //SignUp Close Btn
let bodyHide = document.body; //body Element for Scrolling Issue 

//Logic Stands Here
function hideScrollBar(){
  bodyHide.style.position = "fixed"; //Hides Scroll Bar 
}
function unhideScrollBar(){
  bodyHide.style.position = "absolute"; //UnHides Scroll Bar
}
function openFormBG(){
  bgForm.style.top = "0%";
  hideScrollBar();  //Opens Backgorund of the Forms
}
function closeFormBG(){
  bgForm.style.top = "-150%";
  unhideScrollBar();  //Closes Backgorund of the Forms
}
function openLogIn(){
  logForm.style.top = "50%"
  openFormBG();             //Opens The LogIn Form & Opens formBG
}
function closeLogIn(){
  logForm.style.top = "-150%";      //Closes  The LogIn Form & formBG
  closeFormBG();
  unhideScrollBar();
}
function closeLogInOnCreateAcc(){
  logForm.style.top = "-150%"; 
  openCreateAcc();              //Closes LogIn & Opens Create Acc Form
}
function openCreateAcc(){
  signForm.style.top = "50%";    //Opens Create Acc Form After Closing LogIn Form
}
function closeCreateAccOnLogIn(){
  signForm.style.top = "-150%"; 
  openLogInOnCreateAcc();       //Closes Create Acc Form & Openis LogIn Form
}
function openLogInOnCreateAcc(){
  logForm.style.top = "50%";      //Open LogIn Form After Closing Create Acc Form
}
function closeCreateAcc(){
  signForm.style.top = "-150%";  //Closes Create Acc Form After clicking Cross Button
  closeFormBG();
}

//Events Starts Here

logInBtn.addEventListener("click", openLogIn);  //Opens LogIn Form after clicking Nav LogIn Btn
createAccBtn.addEventListener("click", closeLogInOnCreateAcc); //Closes LogIn Form & Opens SignUp Form After clicking LogIn Create Acc Btn 
signLogBtn.addEventListener("click", closeCreateAccOnLogIn); //Closes SigUp Form & Opens LogIn form After Clicking Log In Btn 
closeBtn.addEventListener("click", closeLogIn);   //closes LogIn form after Clicking cross btn
signUpCloseBtn.addEventListener("click", closeCreateAcc);  //closes SignUp form After Clicking SignUp Cross Btn
>>>>>>> origin
