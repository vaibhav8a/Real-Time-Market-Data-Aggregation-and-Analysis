import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase Admin SDK
const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

let db, auth;

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    console.log('✅ Firebase Admin SDK initialized successfully');
    db = admin.firestore();
    auth = admin.auth();
} catch (error) {
    console.warn('⚠️  Firebase initialization warning:', error.message);
    console.warn('⚠️  Running in demo mode with mock data only');
}

export { db, auth };
export default admin;
