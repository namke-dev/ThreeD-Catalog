// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_45B5sI1mOh3MhImau5A5hcTDPdCL-TQ",
  authDomain: "katalog3d-5ea65.firebaseapp.com",
  projectId: "katalog3d-5ea65",
  storageBucket: "katalog3d-5ea65.appspot.com",
  messagingSenderId: "66790291975",
  appId: "1:66790291975:web:b7a3aff0f2144b9c9248a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
