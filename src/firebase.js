import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCII_bj93WFeghriuDgLpYRDjcl1GJC0Do",
  authDomain: "login-86b52.firebaseapp.com",
  projectId: "login-86b52",
  storageBucket: "login-86b52.appspot.com",
  messagingSenderId: "971949882737",
  appId: "1:971949882737:web:448ccff72d77183c788ad0",
  measurementId: "G-B2F2DPCBGQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app , auth }