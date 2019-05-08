import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDEQDDDLbNd4PmTvxkYNDOFB44cLTr8BL8",
    authDomain: "rsvp-loop-database.firebaseapp.com",
    databaseURL: "https://rsvp-loop-database.firebaseio.com",
    projectId: "rsvp-loop-database",
    storageBucket: "rsvp-loop-database.appspot.com",
    messagingSenderId: "415749062186",
    appId: "1:415749062186:web:ccd624492f44682b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase