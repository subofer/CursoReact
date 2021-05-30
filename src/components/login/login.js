import React, { useState,useEffect } from 'react'
import {Link} from "react-router-dom";

import {useUserContext} from '../../context/userContext'
import {Loading} from '../../helpers/helpers'

import {fire}       from '../../firebase'
import Modal        from '../modal/modal'
import BotonLogin   from './botonLogin'
import MultiButton  from './multiButton'
import MultiInput   from './multiInput'
import Tabs         from './tabs'

export default function Login({classNameCont}) {

    const idForm = "FireLogin"
    const idModalSesion = "Inicia_Sesion"
    const tabInicial = 0

    const [user,userTask] = useUserContext()

    const clearForm = {mail:"",pass:"",name:"",action:null}
    const [form,setForm] = useState(clearForm)
    const [mensaje,setMensaje] = useState(user ? user.displayName:"Iniciar sesion")
    const [activeTab,setActiveTab] = useState(0)

    const [loading,setLoading] = useState(false)


    useEffect(() => {
        userTask.active()
    }, [])  

    useEffect(() => {
        setLoading(false)
    }, [user])  

    useEffect(() => {
      setLoading(false)
     }, [userTask.error,mensaje])      

    useEffect(() => {
       user && document.getElementById("botonCls").click()
       setTimeout(() => {setMensaje(user ? user.displayName:"Iniciar sesion")}, 500);

     }, [user])

    useEffect(() => {
       if(form.action){
          userTask.[form.action](form.mail,form.pass,form.name)
          setLoading(true)
        }
        console.log(form)
     }, [form])


    const inputs = (clear=false,run=null) => {
      let fr = document.getElementById(idForm)
      clear && fr.reset() && setForm(clearForm)
      let res = fr.getElementsByTagName("input")
      return clear ? clearForm
                  :{mail:res.mail.value, pass:res.pass.value, name:res.name.value,action:run}
      }


    const accion = (e,run) =>{
      e.preventDefault()
      setForm(inputs(false,run))
    }

    const onModalOpen = () => {
      inputs(true)
      setActiveTab(tabInicial)
      userTask.clearError()
   }


 return (
    <div className={classNameCont}>
        <BotonLogin idModalDestino = {idModalSesion}
                    click = {()=>{onModalOpen()}}
                    textoBoton={mensaje}
                    menu={[ 
                            {titulo:"Mis Pedidos"        ,to:"/mispedidos"},
                            {Linea:"divisora"},
                            {titulo:"Cerrar sesion"      ,to:"/home" ,click:userTask.logout},
                            {titulo:"Informar"           ,to:"/home" ,click:userTask.active},
                        ]}
        />

        <Modal  titulo = "Inicio de Sesion" id={idModalSesion} error={userTask.error} >
          {/*Body del modal*/}  
          <div>
           <Tabs tabcontrol={[activeTab,setActiveTab]} tabs={[ {name:"Iniciar Sesion"},{name:"Crear cuenta"} ]}></Tabs>
            <form id={idForm} name="fireLogin" >
                 <MultiInput active={activeTab} error={userTask} form={form} seter={setForm}
                             inputList={[
                                     {in:["*"] , name:"mail" , type:"email"    , place:"Ingrese su correo"      , disabled:user},
                                     {in:["*"] , name:"pass" , type:"password" , place:"Ingrese una Contraseña" , disabled:user},
                                     {in:[1]   , name:"name" , type:"name"     , place:"Ingrese su Nombre"      , disabled:user}
                                  ]}
                 />
                 <MultiButton active={activeTab} callback={accion}
                              buttonList={[
                                            {in:[0]   , text:"Ingresar"        , click:"login"  , disabled:user},
                                            {in:[1]   , text:"Crear cuenta"    , click:"create" , disabled:user},
                                            {in:["*"] , text:"Cerrar Sesion"   , click:"logout" , disabled:!user}
                                        ]}
                 />
            </form> 
          </div>

          {/*Mensaje de error de parte de firebase*/}
          {userTask.error.error ? <h6>{userTask.error.full.message}</h6>: <></>}
          {/*Pie del modal*/}
          <div className="opcioncontra">
            <a href="" onClick={e=>accion(e,"recuperarCuenta")}>
              Olvidaste tu contraseña?
            </a>
          </div>
          {/*Overlay de loading*/}
          {loading && <Loading size="6"/>}
        </Modal>
    </div>
 )
}



