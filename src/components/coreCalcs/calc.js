import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'



import {useCartContext} from '../../context/cartContext'
import {useUserContext} from '../../context/userContext'

import {Loading} from '../../helpers/helpers'
import {fire} from '../../firebase'

export default function Sumar() {
 
    const {parametro} = useParams()
    const [cart, cartTask] = useCartContext()
    //configurar users const [user, cartTask] = useCartContext()
    const [estado, setEstado] = useState([])




 useEffect(() => {
    //obtener los valores necesarios de firestore.
    //fire.getCollection(SetLstProductos,"items",familia?{where:["familia","==",familia]}:{})

 },[familia,cart]);


//tomar toda la lista de compra, conseguir el ultimo precio de cada producto
//calcular los costos de cada producto en base al ultimo precio de compra.

//guardar cada calculo de precio para relacionarlo al stock actual
//aplicar los aumentos sobre el producto estacionado y calcular la ganancia implicita en el holding
//calcular los gastos energeticos de tener el producto congelado
//calcular en base a los riesgos de descongelamiento, tomando referencia en alguna base de cortes y duración.

//carga aleatoria de cantidades sobrantes luego de cada produccion, para ir calculando el promedio de consumo de materia prima por articulo producido.

//calcular en base a receta, los consumos de materia prima para producto terminado

//calcular consumibles por producto

//en base a la toma de pedidos, calcular las necesidades de materia prima
//estimar estadisticamente.

//generar la lista de precios actualizados, guardar un historico
//guardar historico de los valores del dolar y euro.






 return(
    
 )  
}




class celBaja {

    detalles (tpcel,color, peso, rpanta, rcam, mram){

        this.tpcel = tpcel;
        this.color = color;
        this.peso = peso;
        this.rpanta = rpanta;
        this.rcam = rcam;
        this.mram = mram;
        this.info = `El celular numero ${this.tpcel} es de color ${this.color} y tiene un peso de ${this.peso}gr, tambien tiene una resolucion de pantalla de ${this.rpanta}px y una camara de ${this.rcam}mpx, ademas cuenta con ${this.mram}Gb de memoria ram `;

    }

    verInfoCel(){

        document.write(this.info)

    }

}

let cel_b_1 = new celBaja(1, "negro", 12, 15, 32, 8);

cel_b_1.verInfoCel()