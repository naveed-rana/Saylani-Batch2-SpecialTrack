import firebase from 'firebase';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCI4IlD8Rnc3zDPWc4UnNXbOEOBZSIZnAw",
  authDomain: "upandrunning-16a19.firebaseapp.com",
  databaseURL: "https://upandrunning-16a19.firebaseio.com",
  projectId: "upandrunning-16a19",
  storageBucket: "upandrunning-16a19.appspot.com",
  messagingSenderId: "333300473658"
};

firebase.initializeApp(config);
var db = firebase.firestore();


  export default db;