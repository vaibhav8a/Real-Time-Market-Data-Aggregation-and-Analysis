import admin from 'firebase-admin';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let db, auth;

try {
    // Method 1: Try to load from serviceAccountKey.json file
    const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');

    let credential;
    if (fs.existsSync(serviceAccountPath)) {
        const serviceAccountFile = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
        credential = admin.credential.cert(serviceAccountFile);
        console.log('✅ Using Firebase credentials from serviceAccountKey.json');
    }
    // Method 2: Use environment variables
    else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
        const serviceAccount = {
            projectId: process.env.FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        };
        credential = admin.credential.cert(serviceAccount);
        console.log('✅ Using Firebase credentials from environment variables');
    }
    else {
        throw new Error('Firebase credentials not found in serviceAccountKey.json or environment variables');
    }

    admin.initializeApp({
        credential: credential,
    });

    console.log('✅ Firebase Admin SDK initialized successfully');
    db = admin.firestore();
    auth = admin.auth();
} catch (error) {
    console.warn('⚠️  Firebase initialization warning:', error.message);
    console.warn('⚠️  Running in demo mode with mock data only');
    console.warn('📝 To enable Firebase:');
    console.warn('   1. Download serviceAccountKey.json from Firebase Console');
    console.warn('   2. Place it in server/config/serviceAccountKey.json');
    console.warn('   OR set FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL env vars');
}

export { db, auth };
export default admin;
