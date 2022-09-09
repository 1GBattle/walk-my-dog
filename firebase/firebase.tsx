// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBhkiPbfu0ROzUy-O170DtXJ3tMbS65qyw',
	authDomain: 'walk-my-dog-66b0c.firebaseapp.com',
	projectId: 'walk-my-dog-66b0c',
	storageBucket: 'walk-my-dog-66b0c.appspot.com',
	messagingSenderId: '631119638603',
	appId: '1:631119638603:web:41c828f99f4c5684371dce',
	measurementId: 'G-9HRCLP6LV2'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
export const googleProvider = new GoogleAuthProvider()
