import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAJ89oZ7HM4CyOYdu1OTR6fN3QGuCtf-A8",
  authDomain: "ecommerce-app-ac2d5.firebaseapp.com",
  projectId: "ecommerce-app-ac2d5",
  storageBucket: "ecommerce-app-ac2d5.appspot.com",
  messagingSenderId: "496532882853",
  appId: "1:496532882853:web:2a02b6c51a7ee2749a144c",
  measurementId: "G-89QSQ7C423"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
