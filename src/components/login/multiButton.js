import React from 'react'


export default function MultiButton({buttonList,active,callback}){
	return (
     	buttonList.map((boton,index) => {
        	return (boton.in.includes(parseInt(active))|| boton.in.includes("*")) && 
        			<button  key={index} id={boton.click}
                    style={{backgroundColor:"#c2bb5f",borderColor: "#c2bb5f"}} 
                    className="btn btn-lg btn-primary btn-block btn-signin"
                    onClick={e=>callback(e,boton.click)} 
                    disabled={boton.disabled}>
                    {boton.text}
                   </button>
           }
    	)
 	)
}
  