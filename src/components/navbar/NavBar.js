import React from 'react'


  function toggleClass(elemento) {
    Array.from(document.getElementsByClassName(elemento.target.classList[0]))
        .forEach((enlace) => {  enlace.classList.remove('activo')}
    )
    elemento.target.classList.add('activo');
  }

function Enlace(props) {
    return (
        <li className='nav-item'><a href={props.url} onClick={toggleClass} className='nav-link'>{props.text}</a></li>
    )
}

export default function NavBar(props) {
 return(
       <nav id='barra_nav' className='col-12 p-0 justify-content-center navbar navbar-expand-md no-gutters'>
          <div className='collapse navbar-collapse justify-content-center' id='navbarSupportedContent'>
            <ul className='navbar-nav '>
                {
                    props.enlaces.map(
                        (item,index) => {
                           return <Enlace key={item[0] + index} tipo='lista' text={item[0]} url={item[1]}/>
                        }
                    )
                }
            </ul>
          </div>
        </nav>
    )
}