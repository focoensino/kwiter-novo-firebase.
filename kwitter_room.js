// Your web app's Firebase configuration
  // Your web app's Firebase configuration

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCHmMK5RZh1Cn3345SlgdnS40gFl_fXKak",
  authDomain: "conversar-699ed.firebaseapp.com",
  databaseURL: "https://conversar-699ed-default-rtdb.firebaseio.com",
  projectId: "conversar-699ed",
  storageBucket: "conversar-699ed.appspot.com",
  messagingSenderId: "443665829942",
  appId: "1:443665829942:web:54372f544de97230900897"
};
  
// inicializar firebase
firebase.initializeApp(firebaseConfig)  

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bem-vindo(a)" + user_name + "!";

function addRoom(){
    room_name =document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

      purpose : "adicionando nome da sala"
    })
    localStorage.setItem("room_name",Room_name)
    window.location = "kwitter_page.html"
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da Sala - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

//function que redireciona o usuario para a salaescolhida

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html" ;
}