//scroll count
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / document.body.offsetHeight);
}, false);

//click
document.querySelector('.second-menu-open').addEventListener('click',menuanimation);
document.querySelector('.imglogin').addEventListener('click',loginanimationopen);
document.querySelector('.main_imglogin').addEventListener('click',loginanimationopen);
document.querySelector('.close_login').addEventListener('click',loginanimationclose);
var secondmenu=document.querySelector('.second-menu');
var login=document.querySelector('.login');

//functions
//menu que vem de lado
function menuanimation(){
  if (document.querySelector('.second-menu').computedStyleMap().get('margin-left')=="-100%") {
    secondmenu.classList.remove('startreverse');
    window.setTimeout(function() {
      secondmenu.classList.add('start');
      secondmenu.classList.remove('finishreverse');
      secondmenu.classList.add('finish');
      document.body.style.overflowY="hidden";
      
    }, 1);
  } else {
    secondmenu.classList.remove('start');
    window.setTimeout(function() {
      secondmenu.classList.add('startreverse');
      secondmenu.classList.remove('finish');
      secondmenu.classList.add('finishreverse');
      document.body.style.overflowY="";
    }, 1);
  }
}

//login
function loginanimationopen(){
  if (document.querySelector('.login').computedStyleMap().get('margin-left')=="100%") {
    login.classList.remove('startreverselogin');
    window.setTimeout(function() {
      login.classList.add('startlogin');
      login.classList.remove('finishreverselogin');
      login.classList.add('finishlogin');
      document.body.style.overflowY="hidden";
      
    }, 1);
  } else {
    login.classList.remove('startlogin');
    window.setTimeout(function() {
      login.classList.add('startreverselogin');
      login.classList.remove('finishlogin');
      login.classList.add('finishreverselogin');
      document.body.style.overflowY="";
    }, 1);
  }
}
function loginanimationclose(){
  login.classList.remove('startlogin');
  window.setTimeout(function() {
    login.classList.add('startreverselogin');
    login.classList.remove('finishlogin');
    login.classList.add('finishreverselogin');
    document.body.style.overflowY="";
  }, 1);
}
var tentativas=3;
function loginuser(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin"){
    window.location = "login.html";
  }
  else{
    alert("Username ou Password incorretos");
  }
}
