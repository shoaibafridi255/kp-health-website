import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA_Bp3OBqDFy0KN-MNfVQlizN0IzDvvr-g",
  authDomain: "kp-health-website.firebaseapp.com",
  projectId: "kp-health-website",
  storageBucket: "kp-health-website.appspot.com", // ❗ Fixed .app to .app**spot.com**
  messagingSenderId: "648195437202",
  appId: "1:648195437202:web:c3ecbd0d9e98d1bc3bac4b",
  measurementId: "G-Q8CLV2ZTF8",
};

// ✅ Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export
export { app, auth, db };
