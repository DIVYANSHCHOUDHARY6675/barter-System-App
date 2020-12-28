import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAHyNQZLZsTOSjs9p-7Vc49jsrTGY7o8SU",
  authDomain: "book-santa-f67a2.firebaseapp.com",
  databaseURL: "https://book-santa-f67a2.firebaseio.com",
  projectId: "book-santa-f67a2",
  storageBucket: "book-santa-f67a2.appspot.com",
  messagingSenderId: "504418057663",
  appId: "1:504418057663:web:26f0f134c5d407ff5af50a"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
