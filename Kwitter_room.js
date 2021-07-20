// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhAxJZL6Q5w3vKOVscXh9hNMe8UWQYfiU",
    authDomain: "kwitterproject-c66ef.firebaseapp.com",
    projectId: "kwitterproject-c66ef",
    storageBucket: "kwitterproject-c66ef.appspot.com",
    messagingSenderId: "589498359246",
    appId: "1:589498359246:web:71bc6cd6fa9cfbd54cdf9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name + "!";
//Start code
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
            
      })
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room name- "+ Room_names);
      row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>" 
      document.getElementById("output").innerHTML=row;
      
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}
//End code