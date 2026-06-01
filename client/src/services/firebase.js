import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBGsZLrogEJLSA04lmia-Obl5LmKhxo4Sw',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'real-time-market-analysis.firebaseapp.com',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'real-time-market-analysis',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'real-time-market-analysis.firebasestorage.app',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1053861286601',
    appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1053861286601:web:cc1fd7b0628239f1df7318',
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-YT7FBDJYP4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Connect to emulator if in development (optional)
if (import.meta.env.DEV) {
    try {
        // Uncomment if you're using Firebase emulator
        // connectAuthEmulator(auth, 'http://localhost:9099');
        // connectFirestoreEmulator(db, 'localhost', 8080);
    } catch (error) {
        // Emulator already connected
    }
}

export default app;
