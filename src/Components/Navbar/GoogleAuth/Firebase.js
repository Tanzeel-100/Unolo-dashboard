import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSWBnDjCgb7N9zm095gODH3ziG7nyCB6g",
  authDomain: "dashboard-f7557.firebaseapp.com",
  projectId: "dashboard-f7557",
  storageBucket: "dashboard-f7557.appspot.com",
  messagingSenderId: "1016974762523",
  appId: "1:1016974762523:web:b7de48ccc7e2e4d5aa4ebe",
  measurementId: "G-1W6CYPF5J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setSignIn) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      setSignIn(true);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(name);
      console.log(email);
      console.log(name);

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("authentication", true);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutWithGoogle = (setSignIn) => {
  signOut(auth)
    .then(() => {
      setSignIn(false);
      localStorage.clear();
      console.log("Logged Out Successfully");
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};
