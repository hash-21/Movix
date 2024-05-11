// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjmOUH1Jy9QsTUshOS_7pdNEVbGrs7LZg",
  authDomain: "movix-31b03.firebaseapp.com",
  projectId: "movix-31b03",
  storageBucket: "movix-31b03.appspot.com",
  messagingSenderId: "1059249926348",
  appId: "1:1059249926348:web:efc4ddab9843479e9a9269",
  measurementId: "G-01DSBF1D0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  

export const auth=getAuth();