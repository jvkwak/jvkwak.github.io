var text = document.getElementById("demo").textContent;
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("uname")
const email = urlParams.get("email");
const comment = urlParams.get("comment");
text += "username: " + username + "<br>" + "email: " + email + "<br>" + "question: " + comment + "<br><br>";
document.getElementById("demo").innerHTML = text;
