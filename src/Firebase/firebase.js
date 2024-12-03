// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs-zc2yAngU5Q9Pd2tniWkza614OBbFIo",
  authDomain: "ph-assignment-10-22d95.firebaseapp.com",
  projectId: "ph-assignment-10-22d95",
  storageBucket: "ph-assignment-10-22d95.firebasestorage.app",
  messagingSenderId: "1012533845310",
  appId: "1:1012533845310:web:aaf479d2d24b7009b0a06f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
