import React, { useState,useEffect } from 'react'
import {Link} from "react-router-dom";

import {fire} from '../../firebase'

import {useUserContext} from '../../context/userContext'
import Modal from '../modal/modal'



export default function Login() {


    const [user,userTask] = useUserContext()

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [mensaje,setMensaje] = useState('Iniciar sesion')


    const [activeTab,setActiveTab] = useState(1)

    const modalSesion = "Inicia_Sesion"
    

    useEffect(() => {
        setMensaje(user? user.email:"Iniciar sesion")
        document.getElementById("botonCls").click()
     }, [user])

    useEffect(() => {

    }, [mensaje])    



    const cc = (e) =>{
       return (e.target.form.correo.value && e.target.form.pass.value) ?
            {mail:e.target.form.correo.value,pass:e.target.form.pass.value}
            :
            false
    }

    const sender = (e) => {
        e.preventDefault()
        userTask.login(cc(e).mail,cc(e).pass)
    }
    
    const logOut = (e) => {
        e.preventDefault()
        userTask.logout()
    }
    
    const nueva = (e) => {
        e.preventDefault()
        userTask.create(cc(e).mail,cc(e).pass)
    }
    
    const recuperarCuenta = (e) => {
        e.preventDefault()
        let recuperarCorreo = e.target.offsetParent.childNodes[1][0].value
        
        if (recuperarCorreo){
            userTask.recuperarCuenta(recuperarCorreo)
             document.getElementById("botonCls").click(); // Click on the checkbox
        }else{

            alert("pintar campo en rojo")
        }




    }
    
    const ActiveTabButton = () =>{
        let style={backgroundColor:"#c2bb5f",borderColor: "#c2bb5f"}
        let clase="btn btn-lg btn-primary btn-block btn-signin"
     let BotonL
           switch (activeTab) {
            case 1:
                 return <button style={style} className={clase} id="logIn" onClick={(e)=>sender(e)} disabled={user?true:false}>Ingresar</button>
            break;
            case 2:
                 return <button style={style} className={clase} id="logIn" onClick={(e)=>nueva(e)} disabled={user?true:false}>Crear cuenta</button>
            break;
        }
    }
    
    const Tabs = () =>{
        return (
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className={activeTab==1?"nav-link active":"nav-link"} href="#" onClick={()=>setActiveTab(1)}>Iniciar sesion</a>
              </li>
              <li className="nav-item">
                <a className={activeTab==2?"nav-link active":"nav-link"} href="#" onClick={()=>setActiveTab(2)}>Crear cuenta</a>
              </li>
            </ul>
        )
    }
    
    //onChange={event => setPass(event.target.value)}
    const Formulario = () => {
        return (
            <>
            <Tabs/>
            <form id="FireLogin" name="fireLogin">
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-envelope"/></span>
                      <input type="email" className="form-control" name="correo" placeholder="Ingrese su Correo" 
                        id="Correo" aria-describedby="sizing-addon1" 
                        required disabled={user?true:false}/>
                    </div>
                    <br/>
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-lock"/></span>
                      <input id="pass" type="password" name="contra" className="form-control" 
                        placeholder="Contraseña" aria-describedby="sizing-addon1" 
                        required disabled={user?true:false}/>
                    </div>
                    <br/>

                    <ActiveTabButton/>

                    <button 
                        style={{backgroundColor:"#c2bb5f",borderColor: "#c2bb5f"}}
                        className="btn btn-lg btn-primary btn-block btn-signin" id="LogOut" disabled={user?false:true} onClick={logOut}>Cerrar Sesion</button>
                    
            </form>    
            </>
        )
    }

return (
            <>
            <div className="btn-group">
              
                <button className="btn btn-secondary btn-sm" type="button"
                        data-toggle="modal" data-target={"#"+modalSesion}
                        onClick={()=>setActiveTab(1)}
                >
                    {mensaje}
                
                </button>

              
              
              <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/home">Ver Pedidos</Link>

                <Link className="dropdown-item" to="/profile">Perfil</Link>

                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" onClick={userTask.logout}>Cerrar sesion</Link>
              </div>
            </div>

            <Modal  id={modalSesion}
                    titulo= "Inicio de Sesion"   
                    contenido={<Formulario/>}
                    footer={<div className="opcioncontra"><a href="" onClick={e => recuperarCuenta(e)}>Olvidaste tu contraseña?</a></div>}
                />
            </>
        )
    }