function addUser(){
    var name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", name);
    window.location="kwitter_room.html";
}