import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database';
import 'firebase/storage'
import 'firebase/firebase-firestore'

 const Config = {
    apiKey: "AIzaSyAb6BIzu1n4yBk9KdFSHrKnI9OM8feqfyQ",
    authDomain: "patitas-8d086.firebaseapp.com",
    databaseURL: "https://patitas-8d086.firebaseio.com",
    projectId: "patitas-8d086",
    storageBucket: "patitas-8d086.appspot.com",
    messagingSenderId: "153758003654",
    appId: "1:153758003654:web:f66ce52dea3b8194ad02c7",
    measurementId: "G-LKPGXKXBM4"
  };

  firebase.initializeApp(Config);

  export const { auth } = firebase;
  export const storage = firebase.storage();
  export const firestore = firebase.firestore();
  export const database = firebase.database();

  export const provider = new firebase.auth.GoogleAuthProvider();