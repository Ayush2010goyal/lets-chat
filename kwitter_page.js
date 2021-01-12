
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

    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("room_name");


    function SendIt(){
      var message1=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_name,message:message1,like:0});
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         var name1= message_data['name'];
         var message1= message_data['message'];
         var like1= message_data['like'];
         var name_with_tag= "<h4> "+name1+"<img class='user_tick' src='tick.png'></h4>";
         var message_with_tag= "<h4 class='message_h4'> "+message1+"</h4>";
         var like_button= "<button class='btn btn-warning' id="+firebase_message_id+" value="+like1+ " onclick='update_like(this.id)'>";
         var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>LIKE: "+like1+"</span></button><hr>";

         row= name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;
      
      } }); 

 }); }
getData();

function update_like(message_id){
console.log("clicked on like button " + message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}

function LogOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }