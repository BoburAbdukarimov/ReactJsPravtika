import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDLDdLs_JZuKZYG-7EMjf4IKYGcyovA4Is",
    authDomain: "bobur-app-1114f.firebaseapp.com",
    databaseURL: "https://bobur-app-1114f-default-rtdb.firebaseio.com",
    projectId: "bobur-app-1114f",
    storageBucket: "bobur-app-1114f.appspot.com",
    messagingSenderId: "399346582203",
    appId: "1:399346582203:web:5626712e9ad696d4795f9e",
    measurementId: "G-Y593D1GWF0"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


