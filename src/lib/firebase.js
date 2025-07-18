// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtHsMyqpfsxBtjKhIfsdob3KPSqUuNW8I",
  authDomain: "estoque1-c5809.firebaseapp.com",
  databaseURL: "https://estoque1-c5809-default-rtdb.firebaseio.com",
  projectId: "estoque1-c5809",
  storageBucket: "estoque1-c5809.firebasestorage.app",
  messagingSenderId: "336482475976",
  appId: "1:336482475976:web:6dad267532360b718b2afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

