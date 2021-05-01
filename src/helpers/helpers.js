import React from 'react'                  

export function Loading( {size=5,space=5,text="Loading..."} ){

return(
        <div className={"spinner-border text-primary m-"+space} 
        	 style={{width: size+"rem", height: size+"rem"}} 
        	  role="status">

	       <span className="sr-only">
	       		{text}
	       	</span>
        </div>
	)
}


export function May(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
}