import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH98zM1Y6TIf_qbY_IC0um0WfZ36Y1d5Q",
  authDomain: "netfav-fa43e.firebaseapp.com",
  databaseURL: "https://netfav-fa43e.firebaseio.com",
  projectId: "netfav-fa43e",
  storageBucket: "netfav-fa43e.appspot.com",
  messagingSenderId: "762652878476",
  appId: "1:762652878476:web:78dd490bb4936307007da9",
};
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

export const MovieRef = db.collection('movie'); 

export { firebase };
