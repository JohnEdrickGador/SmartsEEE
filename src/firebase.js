// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvWPw0fMHAljt0ULpotry4EzLI1_L9IZQ",
  authDomain: "room-monitoring-8920d.firebaseapp.com",
  projectId: "room-monitoring-8920d",
  storageBucket: "room-monitoring-8920d.appspot.com",
  messagingSenderId: "581645569295",
  appId: "1:581645569295:web:1d6dc6b061ed8d010a827a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get reference to the servuce
const auth = getAuth(app);