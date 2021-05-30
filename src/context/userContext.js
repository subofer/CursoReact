import React, {useState,useEffect,useContext} from 'react'
import {fire} from '../firebase'


export const UserContext = React.createContext([])

export const useUserContext = () => useContext(UserContext)

export const FireUser = ({children}) => {

	//muestra los errores o los console.log
	const verboso = true
	//valor en segundos que se muestran los errores de usuario
	const tiempoErrores = 10

	const [user, setUser] = useState()
	const [error, setError] = useState("")
	
	const task = {}
	const auth = fire.auth
	
	task.setUser = setUser
	
	task.error    = error
	task.setError = setError

	useEffect(() => {
		task.error = error
	}, [error])

	useEffect(() => {
		task.clearError()
	}, [user])



task.login = (userEmail,password) => {
	console.log(userEmail,password)
 		auth.signInWithEmailAndPassword(userEmail, password)
	    .then((userCredential) => {
	    	task.active() 
	    })
		.catch(e => task.errores(e));
	}


task.logout = () => {
		auth.signOut()
		.then(() => {
			task.active() 
			})
		.catch(e => task.errores(e));
	}


task.create = (userEmail,password,name) =>{

  if(name){

	auth.createUserWithEmailAndPassword(userEmail,password)
  		.then((userCredential) => {
			//Enviar la Verificacion del correo al usuario.
	    	setUser(userCredential.user)
  			task.updateAccountName(name)
			task.verificateEmail()
  		})
  		.catch(e => task.errores(e));

  }else{
  
  	task.errores({code:"auth/no-name" ,message:"You must enter your Name"})
  }

}

task.updateAccountName = (nuevoNombre) =>{

	auth.currentUser.updateProfile({
		displayName: nuevoNombre
	})
	.then(() => task.active()   )
	.catch(e => task.errores(e) );

}

task.updateUserProfile = (objetoUsuario,correo) =>{
	//primero me aseguro que el usuario este logueado
	//crear una coleccion con los usuarios y asignarle campos adicionales en Firebase.
	//Nombre, apellido, Pais, provincia, localidad, calle, numero, telefono, telefono alternativo
	//La coleccion va con el doc en correo electronico.
}

task.getUserProfile = (correo,id) =>{
	//primero me aseguro que el usuario este logueado
	//crear una coleccion con los usuarios y asignarle campos adicionales en Firebase.
	//Nombre, apellido, Pais, provincia, localidad, calle, numero, telefono, telefono alternativo
	//La coleccion va con el doc en correo electronico.
}

task.deleteUserProfile = (correo,id) =>{
	//primero me aseguro que el usuario este logueado, esto borra al usuario completamente de la base de datos.
	//crear una coleccion con los usuarios y asignarle campos adicionales en Firebase.
	//Nombre, apellido, Pais, provincia, localidad, calle, numero, telefono, telefono alternativo
	//La coleccion va con el doc en correo electronico.
}

task.verificateEmail = () =>{
	auth.currentUser.sendEmailVerification()
		.then(() => {})
		.catch(e => task.errores(e));
}


task.active = () =>{
	auth.currentUser && setUser(auth.currentUser)
	auth.onAuthStateChanged(usuario => setUser(usuario) )
}


task.recuperarCuenta = (userEmail) =>{
	if(userEmail){
		auth.sendPasswordResetEmail(userEmail).then(()=>{})
		.catch(e => task.errores(e));
	}else{
		task.errores({code:"auth/invalid-email",message:"You must enter a valid email address"})
	}
}


task.errores = (e) => {
	let err = {}
	err.error = e.code?true:false
	err.code = e.code
	err.full = e
	const erroresRegistrados=[
		{msg:"auth/no-name"        ,dest:["name"]},
		{msg:"auth/wrong-password" ,dest:["pass"]},
		{msg:"auth/weak-password"  ,dest:["pass"]},
		{msg:"auth/user-not-found" ,dest:["mail"]},
		{msg:"auth/invalid-email"  ,dest:["mail"]},
		{msg:"auth/email-already-in-use",dest:["mail"]},
		{msg:"auth/too-many-requests"   ,dest:["pass","mail"]},
	]	
	
	let salida = erroresRegistrados.filter(x => x.msg === err.code).map(x => x.dest)[0]

	salida = !salida?["mail","pass","name"]:salida

	for (const salidas of salida) err.[salidas] = true;	

	verboso && console.log(err)
	setError(err)

	//Borro los errores pasado el tiempo seteado.
	setTimeout(() => {task.clearError(err.code)}, tiempoErrores * 1000);
}

task.clearError = (code) => {
	setError({error:false,code:code?code:"errorCleared",full:""})	
}

return (
    <UserContext.Provider value={[user,task]}>
      {children}
    </UserContext.Provider>
  )
}