import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJawJjUstkTBl_2hbjXjxUG6Irnex9twg",
  authDomain: "linkup-59e19.firebaseapp.com",
  projectId: "linkup-59e19",
  storageBucket: "linkup-59e19.appspot.com",
  messagingSenderId: "239038533354",
  appId: "1:239038533354:web:39f02d9cb7c9eaf13f1193",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
