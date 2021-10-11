import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCre5_I96V1mViYtMXUIspvw05LZp38Hv4",
  authDomain: "admin-user-roles.firebaseapp.com",
  databaseURL: "https://admin-user-roles-default-rtdb.firebaseio.com",
  projectId: "admin-user-roles",
  storageBucket: "admin-user-roles.appspot.com",
  messagingSenderId: "251124982342",
  appId: "1:251124982342:web:32808aa0d1f97eaef7a047",
  measurementId: "G-TKDXQP1QJP"
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
