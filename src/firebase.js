import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAEU1gskxPHamXHJ1xx_SRJQ-TOdumAlXo",
    authDomain: "auth-development-c45bc.firebaseapp.com",
    projectId: "auth-development-c45bc",
    storageBucket: "auth-development-c45bc.appspot.com",
    messagingSenderId: "680612929004",
    appId: "1:680612929004:web:f5ab1a5bae8a5e012674c9"
});
export const auth = app.auth();
console.log(app.options.storageBucket)
export default app;
