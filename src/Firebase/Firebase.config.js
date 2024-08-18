


// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyVADwwB4gILOtC5Lb9JqfJcQl96rAjW4",
  authDomain: "super-shop-6acda.firebaseapp.com",
  projectId: "super-shop-6acda",
  storageBucket: "super-shop-6acda.appspot.com",
  messagingSenderId: "439497643770",
  appId: "1:439497643770:web:b447f2ac01bb446c721b43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
