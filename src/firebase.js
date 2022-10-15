import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1EFnYHHoK5VbKtk_E3Rl0wL3APChhgzY",
  authDomain: "react-disney-clone-3f017.firebaseapp.com",
  projectId: "react-disney-clone-3f017",
  storageBucket: "react-disney-clone-3f017.appspot.com",
  messagingSenderId: "490717485248",
  appId: "1:490717485248:web:0519dfbe869c12fe66b525",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
