import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAstaV6-9_aioHM4-to-HT03G3Nw127mcI",
    authDomain: "fir-auth-d39fa.firebaseapp.com",
    projectId: "fir-auth-d39fa",
    storageBucket: "fir-auth-d39fa.appspot.com",
    messagingSenderId: "599579269829",
    appId: "1:599579269829:web:1580099c6c598f290d2eac",
    measurementId: "G-5HL3DBKFK6"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    }).catch((error)=>{
        console.log(error.message);
    })
}