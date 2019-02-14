import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: process.env.firebaseAPI,
    authDomain: "meeopp-5c63a.firebaseapp.com",
    databaseURL: "https://meeopp-5c63a.firebaseio.com",
    projectId: "meeopp-5c63a",
    storageBucket: "meeopp-5c63a.appspot.com",
    messagingSenderId: "808583003140"
  };
  
firebase.initializeApp(config);

export default firebase;