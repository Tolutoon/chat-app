// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo6_F9eGzU46Ct7YYQGUpJgZQVe4IcJCk",
  authDomain: "chat-app-c4acf.firebaseapp.com",
  projectId: "chat-app-c4acf",
  storageBucket: "chat-app-c4acf.appspot.com",
  messagingSenderId: "142915685425",
  appId: "1:142915685425:web:d40cb7c36dcef4f4cb5910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
