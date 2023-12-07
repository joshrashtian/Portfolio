// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25FPYIVi1ALGmWesQlqCM3O0x_zB0QQ4",
  authDomain: "joshuarashtianportfolio.firebaseapp.com",
  projectId: "joshuarashtianportfolio",
  storageBucket: "joshuarashtianportfolio.appspot.com",
  messagingSenderId: "861807335376",
  appId: "1:861807335376:web:af7ba6b5078e65739d4bd5",
  measurementId: "G-G395BX14Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

const analytics = getAnalytics(app);

export { app, analytics, auth }