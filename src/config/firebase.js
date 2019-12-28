import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDvDMUE_MXGmblvY-Ft8CeSMtGwfLMENrc",
  authDomain: "ibd-website.firebaseapp.com",
  databaseURL: "https://ibd-website.firebaseio.com",
  projectId: "ibd-website",
  storageBucket: "ibd-website.appspot.com",
  messagingSenderId: "963457630902",
  appId: "1:963457630902:web:fed0a49ec212d8d6689c17"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const submissionsCollection = db.collection("submissions");

export { db, submissionsCollection };
