//scroll count
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

//click
document.getElementById('second-menu-open').addEventListener('click',menuanimation);
var secondmenu=document.querySelector('.second-menu');
//functions
function menuanimation(){
  if (document.querySelector('.second-menu').computedStyleMap().get('margin-left')=="-100%") {
    secondmenu.classList.add('start');
    window.setTimeout(function() {
      secondmenu.classList.remove('finishreverse');
      secondmenu.classList.remove('start');
      secondmenu.classList.add('finish');
    }, 1000);
  } else {
    secondmenu.classList.add('startreverse');
    window.setTimeout(function() {
      secondmenu.classList.remove('finish');
      secondmenu.classList.remove('startreverse');
      secondmenu.classList.add('finishreverse');
    }, 1000);
  }
}