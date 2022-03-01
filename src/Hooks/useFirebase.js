import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import initializeAuthentication from '../Firebase/Authentication.init'
import { useLocation, useNavigate } from 'react-router-dom';

initializeAuthentication();
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const[admin, setAdmin] = useState();

    const auth = getAuth();
    const signinUsingGoogle = () => {
    return signInWithPopup(auth, googleprovider)
      
    }

    const logOut = ()=>{
        signOut (auth)
        .then(()=>{
            setUser({})
        })
    }

    // Creating new user 

    const registerUser=(email, password, name, navigate, location)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const newUser = {email, displayName:name};
            setUser(newUser);
            saveUser(email, name, 'POST');

            // Redicrect 
            const redirect =location?.state?.from || '/';
            navigate(redirect)
        })
        .catch(error=>{
            const errorMassage = error.massage;
        })
    }

    const loginRegisteredUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        .catch(error=>{
            const errorMassage = error.massage;
        })
    }

    useEffect(()=>{

        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    }, [auth])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://obscure-beyond-83290.herokuapp.com/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    useEffect(() => {
        fetch(`https://obscure-beyond-83290.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        admin,
        error,
        signinUsingGoogle,
        logOut,
        registerUser,
        loginRegisteredUser
    }
};

export default useFirebase;