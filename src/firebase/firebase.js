// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getDatabase } from "firebase/database";
import * as auth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIpEZfVg5-oxQXsHcLkYdwf7QWxNiFS8c",
  authDomain: "kanban-board-2fb23.firebaseapp.com",
  databaseURL: "https://kanban-board-2fb23-default-rtdb.firebaseio.com",
  projectId: "kanban-board-2fb23",
  storageBucket: "kanban-board-2fb23.appspot.com",
  messagingSenderId: "1053643201375",
  appId: "1:1053643201375:web:e74735138a603bfc28f4ea",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const authInstance = auth.getAuth(firebaseApp);
const onAuthStateChanged = auth.onAuthStateChanged;
const db = getDatabase();
const googleAuthProvider = new auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase,
  auth,
  firebaseApp,
  authInstance,
  onAuthStateChanged,
};
