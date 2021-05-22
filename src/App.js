import './App.css';
import {BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'

import {TransitionGroup,CSSTransition} from "react-transition-group"


import {Carrito} from './context/cartContext'

import Cabecera from './components/header/Header'

import Home from './components/pages/home'

import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './components/itemlistcontainer/ItemDetailContainer'
import ItemDetail from './components/itemlistcontainer/ItemDetail'

import CartIconContainer from './components/cart/cartIconContainer'
import CartListContainer from './components/cart/cartListContainer'

import TablaPrecios from './components/pricelist/pricelist'

import Footer from './components/footer/footer'

export default function App() {

return (
<Carrito>     

  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">

      <Cabecera
                titulo = 'La cocina de la Pipi' 
                logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
                enlaces="seccionesNavBar"
      />
     

    <CartIconContainer/>
   
    <main>




    <TransitionGroup>
          <CSSTransition
            key={1}
            classNames="fade"
            timeout={300}
          >
        <Switch>
         
          <Route path="/home">
            <Home/>
          </Route>
          
          <Route path="/recetas">
           <h2>No hay recetas por el momento</h2> 
          </Route>
              
          <Route path="/precios">
            <TablaPrecios/>
          </Route>
   
          <Route exact path="/productos/:familia/:id">
              <ItemDetailContainer/>
          </Route>

          <Route exact path="/productos/:familia">
              <ItemListContainer/>
          </Route>

          <Route exact path="/productos">
              <ItemListContainer/>
          </Route>
          
          <Route path="/detalle">
              <ItemDetail/>
          </Route>

          <Route path="/pedidos">
              <CartListContainer/>
          </Route>
     
          <Route path="/">
            <OnLoadPage/>
          </Route>
         
        </Switch>

                  </CSSTransition>
        </TransitionGroup>
      </main>

      <Footer
        titulo = 'La cocina de la Pipi'
        logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
        enlaces="seccionesNavBar"
        telefono="11 15 41234-1234"
        correo="pedidos@correo.com"
      />

    </div>
   </Router>

</Carrito> 
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