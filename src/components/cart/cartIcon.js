import React from 'react'

export default function CartIcon(){

return(
	  <div id="pedidos">
		<div id="botoncompra">
			<button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_desktop" onClick={e => console.log(e)} data-target="#pedido_online" >
				Carrito 
				<span id="total_carro_d" className="badge bg-secondary"></span>
		    </button>
		    
		    <button data-toggle="modal" type="button" className="btn btn-danger btn-lg order_mobile" onClick={e => console.log(e)} data-target="#pedido_online" >
		    	<span id="total_carro_m" className="badge bg-secondary"></span>    
		   	</button>
		</div>


            
                <div className="modal fade" id="pedido_online" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Hace tu pedido!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Hace tu pedido desde <a href="#productos" data-toggle="modal" onclick="cargar_contenido('productos')">aqui</a>, seleccionando los productos</p>
                                <div id="detallepedido"></div>
                                <form  target="_blank">
                                    <div className="form-group">
                                        Aquí se completa el mensaje codificado para el comercio.
                                        <textarea className="form-control"  id="text" name="text" rows="1" placeholder=""></textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="reset" onclick="carro.borrarCarro()" className="btn btn-secondary">Vaciar carrito</button>
                                        <button type="reset" type="button" className="btn btn-secondary" data-dismiss="modal">Seguir comprando</button>
                                        <button type="submit button" value="Enviar" className="btn btn-primary">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

	)
}