import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCIDAPEGSXOOy2U4j1ry5sC1rmx8l98p8I",
    authDomain: "ninja-smoothies-1813a.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-1813a.firebaseio.com",
    projectId: "ninja-smoothies-1813a",
    storageBucket: "ninja-smoothies-1813a.appspot.com",
    messagingSenderId: "590285030343",
    appId: "1:590285030343:web:a091b5246a395ce510cfe2",
    measurementId: "G-LR8TKCFLPD"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// firebaseApp.firestore().settings({ timestampInSnapshots: true })

export default firebaseApp.firestore()