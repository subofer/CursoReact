import React from 'react'
import {randomKey} from '../../helpers/helpers'

export default function CartList({titulo,children}){


return(
    <div className="row justify-content-center py-3">   
        <div className="col-12 pb-4">
            <h1> {titulo} </h1>
        </div>
            {children} 
    </div> 
	)
}