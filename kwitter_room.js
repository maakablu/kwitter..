
//AÑADE TUS ENLACES DE FIREBASE

var firebaseConfig = {
  apiKey: "AIzaSyAWhKvTO6pzII1OxmNI2S1cs71A-zbV4dI",

  authDomain: "kwitter-f2ff4.firebaseapp.com",

  databaseURL: "https://kwitter-f2ff4-default-rtdb.firebaseio.com",

  projectId: "kwitter-f2ff4",

  storageBucket: "kwitter-f2ff4.appspot.com",

  messagingSenderId: "238934511995",

  appId: "1:238934511995:web:a0b2ab485424a9dfe02dde"

};

// ADD YOUR FIREBASE LINKS
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="kwitter_page.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }



      
