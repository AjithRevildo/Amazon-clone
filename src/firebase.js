import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCYh8sN7bt_E8e85ZAW65MfjGPojI8XGyw",
    authDomain: "revildo--clone.firebaseapp.com",
    projectId: "revildo--clone",
    storageBucket: "revildo--clone.appspot.com",
    messagingSenderId: "381032958875",
    appId: "1:381032958875:web:362c88fc4e4dae7b6f2f3e",
    measurementId: "G-K1HNQMRB7P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };