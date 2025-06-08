// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCw5PHqJgLuzWskFlUYsbte6AxhWki1QCg",
    authDomain: "boda-momentos.firebaseapp.com",
    projectId: "boda-momentos",
    storageBucket: "boda-momentos.firebasestorage.app",
    messagingSenderId: "217601370400",
    appId: "1:217601370400:web:e3a565a7d12b53b8214f45",
};
// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApp();
}

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, firestore, auth, storage, db };

