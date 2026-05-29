# Firebase Setup Guide

This project uses Firebase Admin SDK for backend authentication and Firestore database.

## Two Methods to Configure Firebase Credentials

### Method 1: Using Service Account Key File (Recommended)

1. **Get Your Service Account Key from Firebase Console:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to **Settings** (⚙️ icon) → **Service Accounts**
   - Click **Generate New Private Key**
   - A JSON file will be downloaded

2. **Place the File in Your Project:**
   ```bash
   # Move the downloaded file to:
   server/config/serviceAccountKey.json
   ```

3. **Done!** The app will automatically load credentials from this file.

---

### Method 2: Using Environment Variables

If you can't use a service account key file, add these to your `server/.env`:

```bash
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@your-project-id.iam.gserviceaccount.com
```

**Important:** Replace `\n` with actual newlines in the private key.

---

## How It Works

The Firebase configuration (`server/config/firebase.js`) checks for credentials in this order:

1. ✅ **serviceAccountKey.json** file (if it exists)
2. ✅ **Environment variables** (FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL)
3. ❌ Falls back to **demo mode** (mock data only)

---

## What Gets Enabled

Once Firebase is properly configured:

- ✅ **User Authentication** via Firebase Auth
- ✅ **Firestore Database** for storing:
  - User alerts and watchlists
  - User preferences
  - Portfolio data
  - Transaction history

---

## Demo Mode (Current Status)

If Firebase credentials aren't configured:
- ⚠️ The app runs in **demo mode** with mock data
- ⚠️ All data is **not persisted**
- ⚠️ Features like alerts won't save between sessions

---

## Restart After Adding Credentials

After adding credentials:

```bash
# Kill the current server
killall node

# Restart the development server
npm run dev:server

# You should see:
# ✅ Using Firebase credentials from serviceAccountKey.json
# ✅ Firebase Admin SDK initialized successfully
```

---

## Security Notes

- ⚠️ **Never** commit `serviceAccountKey.json` to version control
- ✅ It's already in `.gitignore` for protection
- ⚠️ **Never** share your private key publicly
- ✅ Use environment variables in production, not file-based keys

---

## Troubleshooting

**Error: "Failed to parse private key"**
- Make sure the private key format is correct
- Check that newlines are properly escaped

**Error: "Firebase initialization warning"**
- This means credentials aren't configured yet
- Follow Method 1 or Method 2 above

**Need Help?**
- Check the [Firebase Admin SDK Documentation](https://firebase.google.com/docs/admin/setup)
- Review the Firebase Console for your project details
