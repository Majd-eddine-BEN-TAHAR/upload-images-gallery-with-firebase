import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC709UboGRfeHqfZ-xGh-vx2lO_Fi2raYk",
  authDomain: "fir-gallery-9f74a.firebaseapp.com",
  databaseURL: "https://fir-gallery-9f74a.firebaseio.com",
  projectId: "fir-gallery-9f74a",
  storageBucket: "fir-gallery-9f74a.appspot.com",
  messagingSenderId: "88883198191",
  appId: "1:88883198191:web:14f2f1216a4c4d5868831a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// timestamp is a Function , we use it to create a new timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
