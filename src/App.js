import {useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth"
import './App.css';
import {auth, } from "./firebase-config"

function App() {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState({})
  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
  })

  const register = async() =>{
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user);
      setRegisterEmail("")
      setRegisterPassword("")
    } catch (error) {
      console.log(error.message);
    }
    
  }

  const login = async() =>{
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const signout = async() =>{
    await signOut(auth)
  }
  
  return (
    <div className="App">
     kung fu kenny
     <div>
       <h3>Register user</h3>
       <input 
       placeholder="email"
       value={registerEmail}
       onChange={(e)=>setRegisterEmail(e.target.value)}/>

       <input placeholder="password"
        value={registerPassword}
        onChange={(e)=>setRegisterPassword(e.target.value)}/>
       <button onClick={register}>Register</button>
     </div>
     <div>
       <h3>Login</h3>
       <input
        placeholder="email"
        value={loginEmail}
        onChange={(e)=>setLoginEmail(e.target.value)}/>
       <input 
        placeholder="password"
        value={loginPassword}
        onChange={(e)=>setLoginPassword(e.target.value)}/>
       <button onClick={login}>Login</button>
     </div>
     <h4>user logged in</h4>
     {user?.email}
     <button onClick={signout}>Sign Out</button>
    </div>
  );
}

export default App;
