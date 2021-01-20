import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDBlkn_dtYR-y5ISZrZzrz9qYGIxplC7Ys",
    authDomain: "linkedin-clone-39c23.firebaseapp.com",
    projectId: "linkedin-clone-39c23",
    storageBucket: "linkedin-clone-39c23.appspot.com",
    messagingSenderId: "595193563784",
    appId: "1:595193563784:web:2e92efa3d4c90f09822d3d",
    measurementId: "G-KZDPLPEH0N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}