var i = 0;
var slides = [];
var time = 3000;

slides[0] = document.getElementById("wonjung");
slides[1] = document.getElementById("juhee");
slides[2] = document.getElementById("joonvin");
slides[3] = document.getElementById("jenny");
slides[4] = document.getElementById("giung");
slides[5] = document.getElementById("soomin");

function changeSlide(){
  if(i < slides.length -1)
  {
    i++;
  }
  else
  {
    i = 0;
  }
  
  setTimeout("chagesImg()", time);
}
window.onload = changeSlide;

