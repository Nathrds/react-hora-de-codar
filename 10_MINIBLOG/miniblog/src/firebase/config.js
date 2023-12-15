
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlDtYVFM2dN7OLwnCwZexRWqUuO27r7yE",
  authDomain: "miniblog-993d5.firebaseapp.com",
  projectId: "miniblog-993d5",
  storageBucket: "miniblog-993d5.appspot.com",
  messagingSenderId: "285157331596",
  appId: "1:285157331596:web:c67746f2ae51cc04fd21a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};