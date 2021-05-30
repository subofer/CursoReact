import React, {useEffect,useState}from 'react'

import {useUserContext} from '../../context/userContext'


export default function Profile(){
    const [user,userTask] = useUserContext()

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    useEffect(() => {

    }, [user])

const sender = (event) => {
    event.preventDefault()
    userTask.login(email,pass)
}

const logOut = (event) => {
    event.preventDefault()
    userTask.logout()
}

const nueva = (event) => {
    event.preventDefault()
    userTask.create(email,pass)
}

const recuperarCuenta = (event) => {
    event.preventDefault()
    email && userTask.recuperarCuenta(email)
}


const mostrarUsuario = (event) => {
    event.preventDefault()
}

return(

<div className="row justify-content-center py-3">    
    <div className="col-12 pb-4">
        <h1>Bienvenidos!</h1> 
    </div>
{user?
    <div className="col-8 col-md-7 col-lg-6">
        <form id="FireLogin" name="fireLogin">
                <div className="input-group input-group-lg row">
                  <div className="col-5">
                  <input type="email" className="form-control" name="Nombre" placeholder={(user && user.displayName) || "Ingrese nombre"} id="nombre" aria-describedby="sizing-addon1" />
                </div>  
                <div className="col-2"/>
                    <div className="col-5">
                  <input type="email" className="form-control" name="correo" placeholder={(user && user.email)||"No se puede cambiar el correo"} id="Correo" aria-describedby="sizing-addon1" disabled="true"/>
                  </div>
                </div>

                <br/>

                <button className="btn btn-lg btn-primary btn-block btn-signin" id="logIn" onClick={e=>mostrarUsuario(e)}>Guardar Usuario</button>

        </form>        
    </div>
    :
    <div><h2>Debe ingresar a su cuenta para ver el perfil.</h2></div>
}
</div>



)
}

