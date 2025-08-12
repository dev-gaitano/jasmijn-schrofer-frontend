// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBI1yhgMg1LWJJl_13lgKwNjhK7eQ7YfIw",
  authDomain: "jasmijn-schrofer.firebaseapp.com",
  projectId: "jasmijn-schrofer",
  storageBucket: "jasmijn-schrofer.firebasestorage.app",
  messagingSenderId: "213894781244",
  appId: "1:213894781244:web:8ca9ded162c2258bb7e639",
  measurementId: "G-8CXGKK03D6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Lazy load analytics only when needed
export const getAnalytics = async () => {
  const { getAnalytics } = await import("firebase/analytics");
  return getAnalytics(app);
};
