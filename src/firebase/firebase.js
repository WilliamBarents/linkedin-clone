import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ7Ocu0FiGf2OsAOCbfRpymmhYW2-4XX0",
  authDomain: "linkedin-clone-b046e.firebaseapp.com",
  projectId: "linkedin-clone-b046e",
  storageBucket: "linkedin-clone-b046e.appspot.com",
  messagingSenderId: "660473174445",
  appId: "1:660473174445:web:c3a145cd00dd5ea9122924",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
