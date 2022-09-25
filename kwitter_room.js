const firebaseConfig = {
    apiKey: "AIzaSyCdEpKJPNeVMj-1XxlRq3Y2617RutiH5z8",
    authDomain: "chatter-f9990.firebaseapp.com",
    databaseURL: "https://chatter-f9990-default-rtdb.firebaseio.com",
    projectId: "chatter-f9990",
    storageBucket: "chatter-f9990.appspot.com",
    messagingSenderId: "701975960587",
    appId: "1:701975960587:web:80e11b82b4c9b995a27b0e",
    measurementId: "G-DFVFF74WZG"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
 

//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WElCOME "+user_name+"!!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row;
    //End code
    });});}
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}


