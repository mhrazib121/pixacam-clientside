import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// import initializeAuthentication from '../Firebase/authentication.init';
import initializeAuthentication from '../Firebase/Authentication.init'
import { useLocation, useNavigate } from 'react-router-dom';

initializeAuthentication();
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const myName= 'razib';
    const [error, setError] = useState();
    

    

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

    // signOut(auth).then(() => {
    //     // Sign-out successful.
    // }).catch((error) => {
    //     // An error happened.
    // });

    useEffect(()=>{

        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
        // const unsubscribe = onAuthStateChanged (auth, user =>{
        //     if(user){
        //         setUser(user)
        //     }
        //     else{
        //         setUser({})
        //     }
        // })
        // return ()=> unsubscribe
    }, [auth])

    return {
        user,
        error,
        signinUsingGoogle,
        myName,
        logOut
    }
};

export default useFirebase;