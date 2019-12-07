document.getElementById("userinfo").style.visibility = "hidden";
document.getElementById("questions").style.visibility = "hidden";
function onSignIn(googleUser) {
  document.getElementById("loginwindow").style.visibility = "hidden";
  document.getElementById("userinfo").style.visibility = "visible";
  document.getElementById("questions").style.visibility = "visible";
  //alert(document.getElementById("userinfo").style.visibility);
  //alert(document.getElementById("questions").style.visibility);
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  document.getElementById("name").innerHTML = "Username: "  + profile.getName();
  document.getElementsByTagName("img")[1].setAttribute("src", profile.getImageUrl());
  document.getElementById("email").innerHTML = "Email: " + profile.getEmail();
  }    
function signOut() {
  document.getElementById("loginwindow").style.visibility = "visible";
  document.getElementById("userinfo").style.visibility = "hidden";
  document.getElementById("questions").style.visibility = "hidden";
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
      
function init() {
  console.log('init');
  gapi.load('auth2', function() {
     console.log('auth2');
     var gauth = gapi.auth2.init({
        client_id:'530046462240-duhftkcbfu3p7l56t2g6h799p2f4tdr8.apps.googleusercontent.com'
     })
     gauth.then(function(){
     console.log('googleAuth success');
     if(gauth.isSignedIn.get()){
       console.log('logged in');
     }
     else {
       console.log('logged out');
     }
    }, function(){
            console.log('googleAuth fail');
          });
        });
 }
