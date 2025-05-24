import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2Scy_r91a2nM3L-ndoQrIAf3XidgA7nw",
    authDomain: "prueba-25fef.firebaseapp.com",
    projectId: "prueba-25fef",
    storageBucket: "prueba-25fef.firebasestorage.app",
    messagingSenderId: "973463362243",
    appId: "1:973463362243:web:6c8fae154e3f5deeff6076",
    measurementId: "G-SW6514GBEX"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
