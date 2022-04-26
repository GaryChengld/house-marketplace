import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCeB4kZizQVCJvK9Kr1Rum5n7x7-_IqVHA',
  authDomain: 'house-marketplace-app-8b720.firebaseapp.com',
  projectId: 'house-marketplace-app-8b720',
  storageBucket: 'house-marketplace-app-8b720.appspot.com',
  messagingSenderId: '230310638554',
  appId: '1:230310638554:web:09c051c57be093edd1c6e3',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
