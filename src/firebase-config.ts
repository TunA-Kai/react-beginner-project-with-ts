import firebase from 'firebase/compat/app'
import { getAuth } from 'firebase/auth'
import 'firebase/compat/auth'
import * as firebaseui from 'firebaseui'

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

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
}
