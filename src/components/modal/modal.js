import React, { useEffect,useState } from 'react'


export default function Modal({id,titulo,error,children}){
 
  let childs = React.Children.toArray(children)

	return(
		<div className="modal fade" id={id} tabIndex="-1" aria-labelledby="modal" aria-hidden="true">
			<div className="modal-dialog" style={{position: "relative"}}>
		    	<div className="modal-content" style={{position: "absolute"}}>
		        	<div className="modal-header">
		            	<h4 className="modal-title mx-4" id="tituloModal">{titulo}</h4>
		                <button id="botonCls" type="button" className="close" data-dismiss="modal" aria-label="Close">
		                	<span aria-hidden="true">&times;</span>
		               	</button>
		            </div>
		            <div className="modal-body">
		            	     {childs[0]}

		                <div>
		                	{childs[1]}
		                </div>

	                    <div className="modal-footer">
	                         {childs[2]}
	                    </div>
		            </div>
		        </div>
		    {/* Div con superposicion para loading o para algun tipo de mensaje overlay*/}
		        <div style={{
		        		position: "absolute",
		        		zindex:"9000", 
          				opacity:"0.9",
          				width: "100%",
          				height: '100%',
          				top:"100px",
            			}}>{childs[3]}
            	</div>
		    </div>
		</div>
	)
}
