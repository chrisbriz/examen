import firebase from "firebase-admin"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6lw7uZNwhf5QK5vGWC7trFjgkoSdfoZU",
  authDomain: "examen-73662.firebaseapp.com",
  projectId: "examen-73662",
  storageBucket: "examen-73662.appspot.com",
  messagingSenderId: "949050720337",
  appId: "1:949050720337:web:fcae55715449a48e247870",
  measurementId: "G-FEQHTPBGHN",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const store = firebase.firestore()

export default store