// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrNbc0n7WLQKdC3Pm5L61cQqiQPJrreR4",
  authDomain: "obituary-98d43.firebaseapp.com",
  projectId: "obituary-98d43",
  storageBucket: "obituary-98d43.appspot.com",
  messagingSenderId: "583191640755",
  appId: "1:583191640755:web:816b9e0d9e0dc6e0e24ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
