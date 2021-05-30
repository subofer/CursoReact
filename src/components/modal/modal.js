import React from 'react'

export default function Modal({id,titulo,footer,contenido,children}){

let child=React.Children.toArray(children)
return(
			<div className="modal fade" id={id} tabIndex="-1" aria-labelledby="modal" aria-hidden="true">
	        	<div className="modal-dialog">
	            	<div className="modal-content">
	                	<div className="modal-header">
	                    	<h5 className="modal-title" id="tituloModal">{titulo}</h5>
	                        <button id="botonCls" type="button" className="close" data-dismiss="modal" aria-label="Close">
	                        	<span aria-hidden="true">&times;</span>
	                        </button>
	                    </div>

	                    <div className="modal-body">
	                        {contenido}
	                        	 {child[0]}
	                        <div>{child[1]}</div>
	                    	<form  target="_blank">
	                        	<div className="modal-footer">
	                        		{footer}
	                        		{child[0]}
	                        	</div>
	                    	</form>
	                    </div>
	                </div>
	            </div>
	       </div>
	)
}
