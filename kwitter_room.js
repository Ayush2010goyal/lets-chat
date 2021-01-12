var firebaseConfig = {
  apiKey: "AIzaSyCWOdaE1MtkS7EOz4iaUwJ8EaQyrj5Hkx4",
  authDomain: "lets-chat-4cc7e.firebaseapp.com",
  databaseURL: "https://lets-chat-4cc7e-default-rtdb.firebaseio.com",
  projectId: "lets-chat-4cc7e",
  storageBucket: "lets-chat-4cc7e.appspot.com",
  messagingSenderId: "380748815188",
  appId: "1:380748815188:web:3be9ed539582c974a546c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var name1=localStorage.getItem("user_name");
document.getElementById("user_name1").innerHTML=  "Welcome " + name1 + " ! ";

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names - " + Room_names);
      row="<div class='room_name' id="+ Room_names + " onclick='RedirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>" ;
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function AddRoom(){
  var roomname=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({purpose:"Adding Room Name"});
  localStorage.setItem("room_name " , roomname);
  window.location="kwitter_page.html";

}

function RedirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}