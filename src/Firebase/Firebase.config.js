

// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log('firebase', import.meta.env.VITE_IMGBB_API_KEY2);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_IMGBB_API_KEY1,
  authDomain:import.meta.env.VITE_IMGBB_API_KEY2,
  projectId:import.meta.env.VITE_IMGBB_API_KEY3,
  storageBucket:import.meta.env.VITE_IMGBB_API_KEY4,
  messagingSenderId:import.meta.env.VITE_IMGBB_API_KEY5,
  appId:import.meta.env.VITE_IMGBB_API_KEY6,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
