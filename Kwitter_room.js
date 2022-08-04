var firebaseConfig = {
    apiKey: "AIzaSyDx7x6b8sFz9D2WynLYLVSYLx4trgOvlzM",
    authDomain: "kwitter-c862b.firebaseapp.com",
    databaseURL: "https://kwitter-c862b-default-rtdb.firebaseio.com",
    projectId: "kwitter-c862b",
    storageBucket: "kwitter-c862b.appspot.com",
    messagingSenderId: "420013019039",
    appId: "1:420013019039:web:58c893e79a5cd6fa17b7aa",
    measurementId: "G-15XMG0P5BV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();