//scroll count
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / document.body.offsetHeight);
}, false);

//ajustar height da pagina
document.getElementById("section").style.minHeight=(window.innerHeight-150)+"px";

//click
document.querySelector('.second-menu-open').addEventListener('click',menuanimation);
document.getElementById('imglogin').addEventListener('click',loginanimationopen);
document.getElementById('main_imglogin').addEventListener('click',loginanimationopen);
document.getElementById('close_login').addEventListener('click',loginanimationclose);
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

function medicofamiliaform(){
  var unome = document.getElementById("unome").value
  var pnome = document.getElementById("pnome").value
  var cdi = document.getElementById("cdi").value
  var idade = document.getElementById("idade").value
  var email = document.getElementById("email").value
  var morada = document.getElementById("morada").value
  var sexo = document.getElementById("sexo").value
  var medicos = document.getElementById("medicos").value
  if(unome && pnome && cdi && idade && email && morada && sexo && medicos != ""){
    document.getElementById("medicofamilia").style.display="none";
    document.getElementById("formsucesso").style.display="blo";
  }else{
    alert("Faltam campos por preencher");
  }
}

function contactarform(){
  var unome = document.getElementById("unome").value
  var pnome = document.getElementById("pnome").value
  var email = document.getElementById("email").value
  var tipo = document.getElementById("tipo").value
  var comentario = document.getElementById("comentario").value
  if(unome && pnome && email && tipo && comentario != ""){
    document.getElementById("contacto").style.display="none";
    document.getElementById("formsucesso").style.display="block";
  }else{
    alert("Faltam campos por preencher");
  }
}
