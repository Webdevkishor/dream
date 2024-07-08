import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDCtIFxqRvVQfttEy1q6MhmUW3qzNYTOA8",
  authDomain: "dreamclerk-app.firebaseapp.com",
  projectId: "dreamclerk-app",
  storageBucket: "dreamclerk-app.appspot.com",
  messagingSenderId: "474992921549",
  appId: "1:474992921549:web:31c622abc6da57d9ef9284"
};

const app = initializeApp(firebaseConfig, "dreamclerk-app");
const appDb = getFirestore(app);
const appRealDb = getDatabase(app);

export { app, appDb, appRealDb };