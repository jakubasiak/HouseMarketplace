// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { firebaseApiKey } from "./firebaseApiKey";

// Initialize Firebase
initializeApp(firebaseApiKey);
export const db = getFirestore()