let logInBtn = document.getElementById("logInBtn");
let closeBtn = document.getElementById("closeBtn");
let form = document.getElementById("logForm");

function open(){
    form.style.top = "50%";
}
function close(){
  form.style.top = "-30%";
}

logInBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);