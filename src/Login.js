import React, { useState, useEffect }  from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import HomePage from './HomePage';

function Login() {

    
    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyAcTdwnKYYepd6K97tdZ6o4SAL0d2ckRnk",
            authDomain: "intelogin-bd908.firebaseapp.com",
            projectId: "intelogin-bd908",
            storageBucket: "intelogin-bd908.appspot.com",
            messagingSenderId: "181265379694",
            appId: "1:181265379694:web:cf5c64521bd1c87865517f"
        });
        
    }else {
        firebase.app(); // if already initialized, use that one
    }

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => {
                return false;
            }
            
        },
    }

    const [user,setUser]=useState(null);

    useEffect ( () =>{
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user)
        });
        return authObserver;
    })

    
      
    return (
        <div>
            {user?(
                
                <HomePage/>
                
            
            ):(
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                    
                />
            )}
        </div>
    )
}

export default Login
