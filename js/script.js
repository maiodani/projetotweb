//scroll count
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

//click
document.querySelector('.second-menu-open').addEventListener('click',menuanimation);
var secondmenu=document.querySelector('.second-menu');
//functions
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