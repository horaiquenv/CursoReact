import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDSq0Ajuv2vK1KWTuV7Y_yR_Gq-a92p1dM",
    authDomain: "vazquezmod3.firebaseapp.com",
    projectId: "vazquezmod3",
    storageBucket: "vazquezmod3.appspot.com",
    messagingSenderId: "785752944211",
    appId: "1:785752944211:web:70348303d1b633481d20a6"
  }
firebase.initializeApp(firebaseConfig)
firebase.auth= firebase.auth()
firebase.db = firebase.firestore()
export default firebase