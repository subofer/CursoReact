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

export function dateToStr(dd,type=1){
let nas = dd.toDate().toString().split(" ")
return[
		{date:"Horario"},
		{date: nas[2] + "/" + nas[1] + "/" + nas[3] + " " + (nas[4].slice(0, -3)) },
		{date: nas[2] + "/" + nas[1] + "/" + nas[3] },
		{date: nas[2] + "/" + nas[1] }
	][type].date
}

export function randomKey(tam=1000000){ 
	return Math.floor(Math.random() * tam)
}


export function FloatLoading( {size=5,space=5,text="Loading...",show=false} ){
return(
 show &&
  <div style={{
    			position: "relative",
    			top: "10px", left: "-5%",
				width: "50%", height: "100%"
			}}
	>

    <div className={"spinner-border text-primary m-"+space} 
         style={{
  					position: "absolute",
					width: "100%",height: "80%",
        	 		opacity:"1", zIndex: "9000",
        	 		width: size+"rem", 
        	 		height: size+"rem"
        	 	}} 
          role="status">
    </div>
  </div>
 )
}




