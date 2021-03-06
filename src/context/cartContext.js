import React, {useState,useEffect,useContext} from 'react'
import {fire} from '../firebase'
import {useUserContext} from './userContext'

import {randomKey} from '../helpers/helpers'
//agregar, guardar el cart en el local storage y recuperarlo...
//restar stock de la base de datos una vez generada la orden del usuario o una vez "despachado"
	//general la task.dispachOrder()
	//generar la task.calcularEnvio() que recupere la direccion del usuario y calcule la distancia del envio
//recuperar el stock si la orden se cancela.


export const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)


export const Carrito = ({children}) => {
//Incio objeto caja de herramientas del carrito.
	const task = {}

	const carroVacio = []
	const [cart, setCart] = useState(carroVacio)
	const [user,userTask] = useUserContext()

	const [order, setOrder] = useState(null)

	const [stockItem, setStockItem] = useState(carroVacio)

	useEffect(()=>{
		order && setCart(carroVacio)
	},[order])

	useEffect(() => {
		task.readFromLocal('tempCart',setCart,user)
	}, [user])
	
	useEffect(()=>{
		task.saveToLocal('tempCart',cart!=carroVacio,user)
	},[cart,stockItem,user])

	task.user = user
	task.userTask = userTask
	task.cart = cart
	task.order = order
	task.setOrder = setOrder


	task.readFromLocal = (key, callback,user) =>{
		//key = user?key+user.uid:key
		//let lst = JSON.parse(localStorage.getItem(key)) || carroVacio
		//return callback(lst) || lst

		return callback(JSON.parse(localStorage.getItem(user?key+user.uid:key)) || carroVacio)
	}
	
	task.saveToLocal = (key,condition,user) =>{
		key = user?key+user.uid:key
		condition && localStorage.setItem(key, JSON.stringify(cart));
	}

//Agregar item unico, o cantidad al existente.
	task.addToCart = (i,q) => {
//Solo agrega items, si la cantidad es mayor a 0
		q > 0 && (task.isInCart(i.codigo) ? 
	 		cart[task.indexOf(i.codigo)].cantidad += q 
	 			: 
	 		setCart( [  ...cart , {"cantidad": q  , ...i} ] ) 

		) && task.set()
		return true
	}

//Dispara actualizaci??n del Cart
	task.set = () => setCart([...cart])
	
//borra todo el cart, lo setea a carroVacio.
	task.clearCart   = () => setCart ( carroVacio )
	
//informa si ya existe en el cart.
	task.isInCart    = id => cart.some ( x => x.codigo === id )

//devuelve el indice del item en particular.
	task.indexOf     = id => cart.findIndex ( x => x.codigo === id ) 
	
//remover un item en particular.
	task.removeItem  = i => cart.splice( task.indexOf(i.codigo) , 1 ) && task.set()

//Devuelve el totald de la compra
	task.getTotal    = () => cart.reduce ( (p,i) => i.cantidad * i.precio + p , 0)

//Sube o baja cantidad
	task.cantidades  = (i,dir) => {
		let index = task.indexOf(i.codigo)
			cart[index].cantidad += dir

			cart[index].cantidad > cart[index].stock ? 
				
				cart[index].cantidad = cart[index].stock 
			: 
				cart[index].cantidad <= 0 && task.removeItem(i)

		task.set()
	}

//Completa el pedido, lo guarda en Firebase
	task.buy = (buyer) => {
		//cambiar para la version final, avisar si el correo no esta verificado..
		//if(user && user.emailVerified ){
		
		let controlStok = fire.batchSellStock(cart)
		if(user && controlStok.lenght==0){
			
			let buyCollection = {
			buyer:{id:user.uid,email:user.email,name:user.displayName},
			cart,
			date: new Date(),
			total: task.getTotal(),
			entregado:false
				}
		
			order ?
				task.update(order)
				:
				fire.setCollection("orders",[buyCollection],"",setOrder)
					
				
		}else{
			//Ahora es un Alert, pero va a ser un Modal 
			//con la lista de productos que no se pueden agregar por falta de Stock
			alert( 
					'El pedido no se genero, por los siguientes motivos:\n'
					+ controlStok.map(x=> "\n"+ x.id +" "+x.nombre +"   Stock: "+ x.stock+"     "+x.mensaje)
					+ "\n\n Retire al menos 1 item de cada articulo agotado para comprar el stock"
				)
		}
		task.set()
	}



//Modifica el pedido ya guardado en Firebase.	
	task.update = (order) => {
			let buyCollection = {
				cart,
				total: task.getTotal()
				}
		fire.updateCollectionDoc("orders",order,buyCollection)
		task.set()
	}



//Actualiza	el stock de un item.
	task.updateItemStock = (item) => {
		fire.updateCollectionDoc("items",item.id,{stock:item.stock-item.cantidad})
	}

//Devuelve la cantidad total de items en el carrito.
	task.getCantidadTotal = cart.reduce ( (p,i) => i.cantidad + p , 0)

//
	task.errores = (e) => {
		//agregar manejo de errores del cart.. para otro dia.
	}

	task.clearOrder = () => {
		setOrder(null)
		//setCart(carroVacio)
	}


	return (
	    <CartContext.Provider value={[cart, task]}>
	      
	      {children}
	    
	    </CartContext.Provider>
	 )

}

