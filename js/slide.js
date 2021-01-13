//slider
var img1=document.querySelector('.slide_image1');
var img2=document.querySelector('.slide_image2');
var img3=document.querySelector('.slide_image3');
var slideanimation_time = 20000;
setTimeout(slideanimation,slideanimation_time);
function slideanimation() {
  setTimeout(slideanimation, slideanimation_time);
  if (img1.classList.contains("finishslidein")) {
    imgout=img1;
    imgin=img2;
  }else if(img2.classList.contains("finishslidein")){
    imgout=img2;
    imgin=img3;
  }else if(img3.classList.contains("finishslidein")){
    imgout=img3;
    imgin=img1;
  }
  imgout.classList.remove('slidein');
  imgin.classList.remove('slideout');
  window.setTimeout(function() {
    imgout.classList.add('slideout');
    imgin.classList.add('slidein');
    imgout.classList.remove('finishslidein');
    imgin.classList.remove('finishslideout');
    imgout.classList.add('finishslideout');
    imgin.classList.add('finishslidein');
  }, 1);
}