import firebase from 'firebase/compat/app'
import { EmailAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth'
import 'firebase/compat/auth'

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyAvV1fS9L1DD7-uFtdtxtxFJ3eQnbW9BMg',
    authDomain: 'learning-firebase-4df79.firebaseapp.com',
    projectId: 'learning-firebase-4df79',
    storageBucket: 'learning-firebase-4df79.appspot.com',
    messagingSenderId: '774601387164',
    appId: '1:774601387164:web:b19b02fccdaf27ddfed159',
    measurementId: 'G-X6D515YTK2',
}
const app = firebase.initializeApp(config)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const emailProvider = new EmailAuthProvider()
