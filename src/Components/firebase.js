import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyD97FF8dyNi5NaLwmgV8d532OZQc-hoqWo",
  authDomain: "twitter-clone-1ef21.firebaseapp.com",
  projectId: "twitter-clone-1ef21",
  storageBucket: "twitter-clone-1ef21.appspot.com",
  messagingSenderId: "712192847418",
  appId: "1:712192847418:web:e404c693e93211ee6ecf03",
  measurementId: "G-3KH5JWP46B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
