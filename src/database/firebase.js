import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {        
    apiKey: "AIzaSyBAlaGpbRyUb34gdIPI4JRjswuC1TLBnao",
    authDomain: "portfolio-70ae6.firebaseapp.com",
    projectId: "portfolio-70ae6",
    storageBucket: "portfolio-70ae6.firebasestorage.app",
    messagingSenderId: "71015520730",
    appId: "1:71015520730:web:11fecec443c5d103ad88e3",
    measurementId: "G-JD2B0L9R791"
}; 

const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);
