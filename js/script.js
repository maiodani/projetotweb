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

//slider
var img1=document.querySelector('.slide_image1');
var img2=document.querySelector('.slide_image2');
var img3=document.querySelector('.slide_image3');
var slideanimation_time = 20000;
setTimeout(slideanimation,slideanimation_time);
function slideanimation() {
  setTimeout(slideanimation, slideanimation_time);
  if (img1.classList.contains("finishslidein")) {
    img1.classList.remove('slidein');
    img2.classList.remove('slideout');
    window.setTimeout(function() {
      img1.classList.add('slideout');
      img2.classList.add('slidein');
      img1.classList.remove('finishslidein');
      img2.classList.remove('finishslideout');
      img1.classList.add('finishslideout');
      img2.classList.add('finishslidein');
    }, 1);
  }else if(img2.classList.contains("finishslidein")){
    img2.classList.remove('slidein');
    img3.classList.remove('slideout');
    window.setTimeout(function() {
      img2.classList.add('slideout');
      img3.classList.add('slidein');
      img2.classList.remove('finishslidein');
      img3.classList.remove('finishslideout');
      img2.classList.add('finishslideout');
      img3.classList.add('finishslidein');
    }, 1);
  }else if(img3.classList.contains("finishslidein")){
    img3.classList.remove('slidein');
    img1.classList.remove('slideout');
    window.setTimeout(function() {
      img3.classList.add('slideout');
      img1.classList.add('slidein');
      img3.classList.remove('finishslidein');
      img1.classList.remove('finishslideout');
      img3.classList.add('finishslideout');
      img1.classList.add('finishslidein');
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
