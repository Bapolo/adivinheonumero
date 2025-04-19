import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCVUBi250ug_dpkN-TkHT4oSZYE5CS5Yt4",
  authDomain: "advinheonumero.firebaseapp.com",
  projectId: "advinheonumero",
  storageBucket: "advinheonumero.firebasestorage.app",
  messagingSenderId: "741284425536",
  appId: "1:741284425536:web:52aa4e139a3970345294a5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const bancoDeDados = getFirestore(app)

export { auth,bancoDeDados }