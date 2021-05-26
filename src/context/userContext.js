import React, {useState,useEffect,useContext} from 'react'
import {fire} from '../firebase'


export const UserContext = React.createContext([])

export const useUserContext = () => useContext(UserContext)


export const FireUser = ({children}) => {

	const [user, setUser] = useState()
	
	const task = {}
	task.setUser = setUser
	const auth = fire.auth

	useEffect(() => {
		task.active()
	}, [user])


task.login = (userEmail,password) => {
 		auth.signInWithEmailAndPassword(userEmail, password)
	    .then((userCredential) => {
	    	setUser(userCredential.user)
	    })
    	.catch((error) => {
	   		setUser(null)
    	});
	}


task.logout = () => {
		auth.signOut().then(() => {
  					setUser(null)
			}).catch((error) => {
  				console.log("error",error)
		});
	}


task.create = (userEmail,password) =>{
	auth.createUserWithEmailAndPassword(userEmail,password)
  		.then((userCredential) => {

	    	setUser(userCredential.user)
			//Verificacion de correo.
			task.verificateEmail()
  		})
  		.catch((error) => {
  			//mensajes de error, notificaciones
    		console.log(error)
  		});
}

task.verificateEmail = () =>{
	auth.currentUser.sendEmailVerification()
		.then(function() {
			// Verification email sent.
		})
		.catch(function(error) {
			// Error occurred. Inspect error.code.
  		});
}

task.active = () =>{
	auth.onAuthStateChanged(us => {
  		setUser(us)
 	})
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