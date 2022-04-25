import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4ycfHeDnVKsaCk9C00AY2n7OBG6gPb7k",
  authDomain: "challenge-688e0.firebaseapp.com",
  projectId: "challenge-688e0",
  storageBucket: "challenge-688e0.appspot.com",
  messagingSenderId: "51713311614",
  appId: "1:51713311614:web:eb11fc7fed10f9ff3e692f",
  measurementId: "G-EL9GNZ86GK",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
