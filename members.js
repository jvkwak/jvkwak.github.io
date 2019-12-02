var i = 0;
var images = [];
var texts = [];
var time = 3000;

images[0] = document.getElementById("wonjung");
images[1] = document.getElementById("juhee");
images[2] = document.getElementById("joonvin");
images[3] = document.getElementById("jenny");
images[4] = document.getElementById("giung");
images[5] = document.getElementById("soomin");

function changeImg(){
  if(i < images.length -1)
  {
    i++;
  }
  else
  {
    i = 0;
  }
  
  setTimeout("chagesImg()", time);
}
window.onload = changeImg;

//<img name = "slide" width = "400" height "200">
