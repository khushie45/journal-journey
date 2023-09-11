import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_hBggbtWpWymOWhrQWGGN3b53W0gUXoM",
  authDomain: "journal-journey-9a3fa.firebaseapp.com",
  projectId: "journal-journey-9a3fa",
  storageBucket: "journal-journey-9a3fa.appspot.com",
  messagingSenderId: "716072291302",
  appId: "1:716072291302:web:adb6d766e4efec9463a427"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();