import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMBsOREBROZmADYZRuM0lZwW3LOeuWe1k",
  authDomain: "test-534af.firebaseapp.com",
  projectId: "test-534af",
  storageBucket: "test-534af.firebasestorage.app",
  messagingSenderId: "614013525688",
  appId: "1:614013525688:web:d64ddb9d9882bcc99ede4d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);