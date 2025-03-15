import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9I_rJwCkBhL_09srIsvDv11f0J02PSNo",
  authDomain: "consultora-wip.firebaseapp.com",
  projectId: "consultora-wip",
  storageBucket: "consultora-wip.firebasestorage.app",
  messagingSenderId: "23575736615",
  appId: "1:23575736615:web:d75d9870002a97ffbff902",
  measurementId: "G-R2X62G5MJ6",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
