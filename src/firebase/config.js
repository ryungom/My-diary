import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGVo4Q0n5rZ4Vl-c3pvoLiGvKduip355U",
    authDomain: "my-diary-02.firebaseapp.com",
    projectId: "my-diary-02",
    storageBucket: "my-diary-02.appspot.com",
    messagingSenderId: "312049199390",
    appId: "1:312049199390:web:a96291de10515372b2810f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 파이어스토어 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();

// 타임스탬프
const timeStamp = Timestamp;

export { appFireStore, appAuth, timeStamp }