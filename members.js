var i = 0;
var images = [];
var texts = [];
var time = 3000;

images[0] = 'wonjung.jpg';
images[1] = 'juhee.jpg';
images[2] = 'joonvin.jpg';
images[3] = 'jenny.jpg';
images[4]= 'giung.jpg';
images[5]= 'soomin.jpg';

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

<img name = "slide" width = "400" height "200">
