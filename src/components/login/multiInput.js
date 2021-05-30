import React from 'react'


export default function MultiInput({inputList,error,active}){
    return (
        inputList.map((input,index) =>
            <div key={index} style={   {display: (input.in.includes(parseInt(active))|| input.in.includes("*"))?"":"none"}   }>
                <div className="input-group input-group-lg">
                    <input id={input.name} name={input.name} type={input.type}
                            placeholder={input.place}
                            className={`inputsLogin form-control ${error.error.[input.name] && "is-invalid"}`} 
                            disabled={input.disabled} 
                            onFocus = {()=>error.clearError()}
                            required 
                    />
                </div>
                <br/>
            </div>
        )
    )
}
  





