import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(auth?.currentUser?.email)

const signIn = async ()=>{
 await createUserWithEmailAndPassword(auth,email,password)
};

const logOut = async ()=>{
    await signOut(auth)
   };

    return(
        <div>
            <input placeholder="email.." onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="pwd....." onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn} >Sign In</button>
            <button onClick={logOut} >Logout</button>
        </div>
    )
}