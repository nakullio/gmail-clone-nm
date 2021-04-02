import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfpvJ5Hnb4pi2M0wXeDJ0UOfGtb6UCSZ4",
    authDomain: "clone-nm.firebaseapp.com",
    projectId: "clone-nm",
    storageBucket: "clone-nm.appspot.com",
    messagingSenderId: "58776679122",
    appId: "1:58776679122:web:35e873376b79e17c4ff30b",
    measurementId: "G-CTQKDFLZ7X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
  

