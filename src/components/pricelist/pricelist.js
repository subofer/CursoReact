import React, { useState, useEffect } from 'react'
import {Loading, May} from '../../helpers/helpers'
import {getFireCollection} from '../../firebase'

export default function TablaPrecios({listado}) {
  const [ListadoProductos, SetListadoProductos] = useState([])

    useEffect( () => {
        
        getFireCollection(SetListadoProductos,"items")

    },[listado]);

   return(
        <div>
            { ListadoProductos.length > 0 ? 
                  <Tabla listaProductos = {ListadoProductos}/>
                    :
                  <Loading size="5" space="5"/>
                }
        </div>
        )
}

function Tabla({listaProductos}) {
 return(
        <div className="row justify-content-center py-3 mw-100">  
            <div className="col-12 pb-4">
              <h1>Productos y precios</h1>
            </div>
            
            <div className="col-10">  
              <section id="tabla_precios">
                
                  <table key="tabla1" className="table table-hover" id="productos">
                    <thead>
                      <tr>
                        <th scope="col" colSpan="1">Producto</th>
                        <th scope="col" colSpan="1">Variedad</th>
                        <th scope="col">            Precio</th>
                      </tr>
                    </thead>
                      <TableContent key="tabla" items={getFamilias(listaProductos)}/>
                  </table>
                
              </section>
            </div>
          </div>
    )
  }

function TableContent({items}){
  return(
    items.map((item,index)=>{
      return(
        <tbody key={index+1}>
          <tr key={index*10}>
            <th key={index} className="align-middle" scope="row" rowSpan={item.cantidad}>{May(item.tipo)}</th>
          </tr>
          {item.productos.map((producto,index)=>{
            return( <tr key={(index*10)+1}>
                      <td key={(index*10)+2}>{May(producto.variedad)}  </td>
                      <td key={(index*10)+3}>${producto.precio}  </td>
                    </tr>)
          })}

        </tbody>
      )
    }) 
  )
}

function  getFamilias(array){
   let porfamilia = []; let n;
   array.forEach(item => {

      var fam = porfamilia.find(element => element.tipo === item.familia);
      
      if (!fam){porfamilia.push({tipo: item.familia, cantidad: n=2, productos:[item]})}
      else{
            n++; fam.cantidad = n;
            fam.productos.push(item)
          }
    })
  return porfamilia
}




