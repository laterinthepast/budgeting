// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCvMzikR9NIAAS1AMdyvjtvzkdpS0VUdE",
  authDomain: "budget-app-f6d45.firebaseapp.com",
  projectId: "budget-app-f6d45",
  storageBucket: "budget-app-f6d45.appspot.com",
  messagingSenderId: "971293259099",
  appId: "1:971293259099:web:012be638781db1ebd1967e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;




