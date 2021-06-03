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

export function dateToStr(dd){
	let nas = dd.toDate().toString().split(" ")
	return nas[2] + "/" + nas[1] + "/" + nas[3] + " " + (nas[4].slice(0, -3))
}

export function randomKey(){ 
	return Math.floor(Math.random() * 10000)
}