// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJwECtxQMTJb9qNYjMFL6F1M3VY3KmJE",
  authDomain: "disney-plus-d15bb.firebaseapp.com",
  projectId: "disney-plus-d15bb",
  storageBucket: "disney-plus-d15bb.appspot.com",
  messagingSenderId: "163795585910",
  appId: "1:163795585910:web:f2e76e170b00adde2b4857"
};


// Initialize Firebase
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Create a root reference
const storage = getStorage();
export {auth,provider,storage};
export default db;