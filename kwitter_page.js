var firebaseConfig = {
    apiKey: "AIzaSyCdEpKJPNeVMj-1XxlRq3Y2617RutiH5z8",
    authDomain: "chatter-f9990.firebaseapp.com",
    databaseURL: "https://chatter-f9990-default-rtdb.firebaseio.com",
    projectId: "chatter-f9990",
    storageBucket: "chatter-f9990.appspot.com",
    messagingSenderId: "701975960587",
    appId: "1:701975960587:web:80e11b82b4c9b995a27b0e",
    measurementId: "G-DFVFF74WZG"
  };
  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_btn="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_btn+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
    } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
}
function updateLike(meassage_id){
button_id= message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes) + 1;

firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
});
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
