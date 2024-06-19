import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBtvK2BP79caZrFy1jJeYLmXfSLByptx_M",
//   authDomain: "react-chat-2-49532.firebaseapp.com",
//   projectId: "react-chat-2-49532",
//   storageBucket: "react-chat-2-49532.appspot.com",
//   messagingSenderId: "911023761009",
//   appId: "1:911023761009:web:c6b5645b2a785375c2ddd0",
//   measurementId: "G-1YDG84P3C9"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDHBDt7u1yn1ho1ALC7wKtxD47who2xsyA",
  authDomain: "react-chat-2525.firebaseapp.com",
  projectId: "react-chat-2525",
  storageBucket: "react-chat-2525.appspot.com",
  messagingSenderId: "763709332863",
  appId: "1:763709332863:web:60c3a168c6c25c1c5ace4a",
  measurementId: "G-XM7XGJKTDR"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
