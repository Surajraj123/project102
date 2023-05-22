// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfzC5ErIqqfcBl_wI2P0KLvOHcgeVHH_c",
    authDomain: "lets-chat-web-app-62944.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-62944-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-62944",
    storageBucket: "lets-chat-web-app-62944.appspot.com",
    messagingSenderId: "157265683531",
    appId: "1:157265683531:web:4deb2dc7ac094061ad59ce"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = local.storage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function add_room(){
    room_name = document.getElementById("room_name").value;

    firebase.database().rel("/").child(room_name).update({
        purpose: "Adding Room Name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";

}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});
getData();
}

function redirectToRoomName(name)
{
    console.log(name);
    local.storage.setItem("room_name", name);
    window.location = "chat_page.html";
}