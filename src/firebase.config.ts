import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAvV1fS9L1DD7-uFtdtxtxFJ3eQnbW9BMg',
    authDomain: 'learning-firebase-4df79.firebaseapp.com',
    projectId: 'learning-firebase-4df79',
    storageBucket: 'learning-firebase-4df79.appspot.com',
    messagingSenderId: '774601387164',
    appId: '1:774601387164:web:5fd33730eff91beafed159',
    measurementId: 'G-0WVHBWK9BT',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
