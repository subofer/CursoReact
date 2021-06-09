import './App.css';
import {BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'

import {Carrito} from './context/cartContext'
import {FireUser} from './context/userContext'

//Home
import Home from './components/pages/home'

//Perfil de usuario (no)
import Profile from './components/pages/profile'
   
//Lista de productos
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './components/itemlistcontainer/ItemDetailContainer'


//Cart list
import CartIconContainer from './components/cart/cartIconContainer'
import CartListContainer from './components/cart/cartListContainer'

//Order list
import OrderListContainer from './components/orders/orderListContainer'

//Precios
import TablaPrecios from './components/pricelist/pricelist'

import Header from './components/header/Header'
import Footer from './components/footer/footer'
export default function App() {

return (
<FireUser>
  <Carrito>     

  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">

      <Header
                titulo = 'La cocina de la Pipi' 
                logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
                enlaces="seccionesNavBar"
      />
    <CartIconContainer/>
    <main>
        <Switch>
         
          <Route path="/home">
            <Home/>
          </Route>
   
         <Route path="/precios">
            <TablaPrecios/>
          </Route>
   
          {/*
          <Route path="/mispedidos">
            <Profile/>
          </Route>
          */}
          <Route exact path="/productos/:familia/:id">
              <ItemDetailContainer/>
          </Route>

          <Route exact path="/productos/:familia">
              <ItemListContainer/>
          </Route>

          <Route exact path="/productos">
              <ItemListContainer/>
          </Route>

          <Route path="/cart/:id">
              <CartListContainer/>
          </Route>
          
          <Route path="/cart">
              <CartListContainer/>
          </Route>

          <Route path="/pedidos/:id">
              <OrderListContainer/>
          </Route>
          
          <Route path="/pedidos">
              <OrderListContainer/>
          </Route>
             
          <Route path="/">
            <OnLoadPage/>
          </Route>
         
        </Switch>
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
</FireUser>
  );
}

function OnLoadPage() {
  const history = useHistory();
    history.push('/productos');
    return(<></>)
  }