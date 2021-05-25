import React, {useEffect,useState}from 'react'

import {useUserContext} from '../../context/userContext'


export default function Login(){
    const [user,userTask] = useUserContext()

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

useEffect(() => {
    console.log(user)
    console.log(userTask.active())
}, [user])



const sender = (event) => {
    event.preventDefault()
    userTask.login(email,pass,userTask.setUser)
}

const logOut = (event) => {
    event.preventDefault()
    userTask.logout(userTask.setUser)
    userTask.logout(console.log)
}

const nueva = (event) => {
    event.preventDefault()
    userTask.create(email,pass,userTask.setUser)
}

const recuperarCuenta = (event) => {
    event.preventDefault()
    email && userTask.recuperarCuenta(email)
}




return(

<div className="row justify-content-center py-3">    
    <div className="col-12 pb-4">
        <h1>Bienvenidos!</h1> 
    </div>
    
    <div className="col-10 col-md-9 col-lg-8">
        <form id="FireLogin" name="fireLogin">
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-envelope"/></span>
                  <input type="email" className="form-control" name="correo" placeholder="Correo" id="Correo" aria-describedby="sizing-addon1" 
                    onChange={event => setEmail(event.target.value)}
                  required/>
                </div>
                <br/>
                <div className="input-group input-group-lg">
                  <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-lock"/></span>
                  <input id="pass" type="password" name="contra" className="form-control" placeholder="******" aria-describedby="sizing-addon1" 
                    onChange={event => setPass(event.target.value)}
                  required/>
                </div>
                <br/>
                <button className="btn btn-lg btn-primary btn-block btn-signin" id="logIn" onClick={sender}>Entrar</button>
                <button className="btn btn-lg btn-primary btn-block btn-signin" id="logIn" onClick={nueva}>guardar nueva cuenta</button>
                <button className="btn btn-lg btn-primary btn-block btn-signin" id="LogOut" onClick={logOut}>Salir</button>
                <div className="opcioncontra"><a href="" onClick={recuperarCuenta}>Olvidaste tu contraseña?</a></div>
                <div className="opcioncontra"><a href="">Crear Cuenta</a></div>
        </form>        
    </div>
</div>



)
}

