import { initializeApp, getApps } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

let db = null;

if (process.env.NODE_ENV === 'INACTIVE') {
// if (process.env.NODE_ENV === 'production') {
  try {
    const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    const appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider('1234567890'), // Optional argument. This is the site key that will be used to invoke reCAPTCHA.
      // Optional argument. If true, the SDK automatically refreshes App Check
      // tokens as needed.
      isTokenAutoRefreshEnabled: true
    });
    db = getFirestore(app);
  } catch (error) {
    console.warn("Firebase failed to initialize, continuing without database:", error.message);
  }
}

export { db };

// Helper: safe Firestore read
export async function safeGetDoc(pathArray) {
  if (!db) return null;
  try {
    const { doc, getDoc } = await import("firebase/firestore");
    const ref = doc(db, ...pathArray);
    const snapshot = await getDoc(ref);
    return snapshot.exists() ? snapshot.data() : null;
  } catch (error) {
    console.warn("Firestore request failed, skipping:", error.message);
    return null;
  }
}

// Optional: simple connection checker that never throws
export async function checkFirebaseConnection() {
  if (!db) return false;
  try {
    const { doc, getDoc } = await import("firebase/firestore");
    const testDoc = doc(db, "_health", "check");
    await getDoc(testDoc);
    return true;
  } catch (error) {
    console.warn("Firebase connection check failed:", error.message);
    return false;
  }
}
