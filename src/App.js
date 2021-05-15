import './App.css';
import {BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import {Carrito} from './context/cartContext'

import Cabecera from './components/header/Header'
import {enlacesNav} from './components/values/values'

import Home from './components/pages/home'

import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './components/itemlistcontainer/ItemDetailContainer'
import ItemDetail from './components/itemlistcontainer/ItemDetail'

import CartIconContainer from './components/cart/cartIconContainer'


import {ListaProductos} from './components/values/values'

import {TablaPrecios} from './components/pricelist/pricelist'

import Footer from './components/footer/footer'

export default function App() {

return (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">

      <Cabecera
                titulo = 'La cocina de la Pipi' 
                logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
                enlaces={enlacesNav}
      />
     

     <Carrito>     
      <CartIconContainer/>
    </Carrito>    
    
    <main>
        <Switch>
          
          <Route path="/home">
            <Home/>
          </Route>
          
          <Route path="/recetas">
            <h2>Recetas</h2>
          </Route>
              
          <Route path="/precios">
            <TablaPrecios listado={ListaProductos} />
          </Route>
         

      <Carrito>      
          <Route exact path="/productos/:familia/:id">
              <ItemDetailContainer listado={ListaProductos} />
          </Route>

          <Route exact path="/productos/:familia">
              <ItemListContainer listado={ListaProductos} />
          </Route>

          <Route exact path="/productos">
              <ItemListContainer listado={ListaProductos} />
          </Route>
          
          <Route path="/detalle">
              <ItemDetail listado={ListaProductos} />
          </Route>
      </Carrito> 

          <Route path="/pedidos">
              <h2>Pedidos</h2>
          </Route>
     
          <Route path="/">
            <OnLoadPage/>
          </Route>
         
        </Switch>
      </main>

      <Footer
        titulo = 'La cocina de la Pipi'
        logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
        enlaces={enlacesNav}
        telefono="11 15 41234-1234"
        correo="pedidos@correo.com"
      />

    </div>
   </Router>
  );
}

function OnLoadPage() {
  const history = useHistory();
    history.push('/home');
    return(
        <>
        </>
      )
  }