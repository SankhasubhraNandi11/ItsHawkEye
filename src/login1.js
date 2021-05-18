import React from 'react'
import firebase from 'firebase'

function login1() {
    return (
        <div>
            <span>
                <div>Signed In!</div>
                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <img
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
                />
            </span>
        </div>
    )
}

export default login1
