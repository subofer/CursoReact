import React, {useState,useEffect,useContext} from 'react'
import {fire} from '../firebase'


export const UserContext = React.createContext([])

export const useUserContext = () => useContext(UserContext)


export const FireUser = ({children}) => {

	const [user, setUser] = useState()
	
	const task = {}
	task.setUser = setUser
	const auth = fire.auth

task.login = (userEmail,password,callback) => {
 		auth.signInWithEmailAndPassword(userEmail, password)
	    .then((userCredential) => {
	    	console.log(userCredential.user.emailVerified)
	    	
userCredential.user.emailVerified?
	    	callback(userCredential.user.email)
	    	:
	    	callback(null)
    	})
    	.catch((error) => {
	   		callback({error})
    	});
	}


task.logout = (callback) => {
		auth.signOut().then(() => {
  				// Sign-out successful.
  				task.active()
  				callback(null)
			}).catch((error) => {
  				// An error happened.
  				console.log("error",error)
		});
	}


task.create = (userEmail,password,callback) =>{
		auth.createUserWithEmailAndPassword(userEmail,password)
  			.then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    console.log(user)

	auth.currentUser.sendEmailVerification()
  		.then(function() {
    		// Verification email sent.
  		})
  		.catch(function(error) {
    		// Error occurred. Inspect error.code.
  		});











    callback(user.email)
  })
  .catch((error) => {
    console.log(error)
  });

}

task.active = () =>{
 let us = {}
 auth.onAuthStateChanged(user => {
  if (user) {
    			  us.uid = user.uid;
  			  	 us.name = user.displayName;
  			 	us.email = user.email;
  			 us.photoUrl = user.photoURL;
  		us.emailVerified = user.emailVerified;
   } 
 });
 return us
}
task.recuperarCuenta = (userEmail) =>{

	auth.sendPasswordResetEmail(userEmail).then(() => {
  		// Email sent.
	}).catch(error => {
  		// An error happened.
	});
}


	return (
	    <UserContext.Provider value={[user,task]}>
	      {children}
	    </UserContext.Provider>
	 )
}