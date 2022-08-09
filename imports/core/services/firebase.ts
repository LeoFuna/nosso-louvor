import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDwJEKaDi43NJy3toCdg8DQbLfTQsssAYs",
  authDomain: "nosso-louvor.firebaseapp.com",
  projectId: "nosso-louvor",
  storageBucket: "nosso-louvor.appspot.com",
  messagingSenderId: "461556227517",
  appId: "1:461556227517:web:f0c11d28f27a868d9fc6d4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
