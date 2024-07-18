// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD78QYRoHqFGCoLnQwYKpnzLsOVxHJ5uBQ",
  authDomain: "netflixgpt-eafc8.firebaseapp.com",
  projectId: "netflixgpt-eafc8",
  storageBucket: "netflixgpt-eafc8.appspot.com",
  messagingSenderId: "792187251197",
  appId: "1:792187251197:web:6d6d3566761b6d0c05d194",
  measurementId: "G-FHK5DHXQYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;