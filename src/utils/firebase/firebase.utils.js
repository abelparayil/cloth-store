import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8syg4pdQL6jMhW9EaKNV0KzFq6ih7qx8",
  authDomain: "cloth-store-db-a1e71.firebaseapp.com",
  projectId: "cloth-store-db-a1e71",
  storageBucket: "cloth-store-db-a1e71.appspot.com",
  messagingSenderId: "436604764361",
  appId: "1:436604764361:web:2a451c6b69a85fd8068d18",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
