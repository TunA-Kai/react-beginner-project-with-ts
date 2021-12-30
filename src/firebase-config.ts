// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAvV1fS9L1DD7-uFtdtxtxFJ3eQnbW9BMg',
    authDomain: 'learning-firebase-4df79.firebaseapp.com',
    projectId: 'learning-firebase-4df79',
    storageBucket: 'learning-firebase-4df79.appspot.com',
    messagingSenderId: '774601387164',
    appId: '1:774601387164:web:644bfc20ed878475fed159',
    measurementId: 'G-4WXK64J131',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
