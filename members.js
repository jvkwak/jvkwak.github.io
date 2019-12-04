var i = 0;
var slides = [];
var time = 3000;

slides.push (document.getElementById("wonjung").childnodes,
             document.getElementById("juhee").childnodes, 
             document.getElementById("joonvin").childnodes, 
             document.getElementById("jenny").childnodes, 
             document.getElementById("giung").childnodes, 
             document.getElementById("soomin").childnodes);

function changeSlide(){
  if(i < slides.length -1)
  {
    i++;
  }
  else
  {
    i = 0;
  }
  
  setTimeout("chagesSlide()", time);
}
window.onload = changeSlide;

