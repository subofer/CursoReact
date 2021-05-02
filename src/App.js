import './App.css';

import {BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'

import Cabecera from './components/header/Header'
import Footer from './components/footer/footer'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import {TablaPrecios} from './components/pricelist/pricelist'


import {EnlacesNav,enlacesNav} from './components/values/values'
import {ListaProductos} from './components/values/values'
import Home from './components/pages/home'


export default function App() {
  console.log(process.env.PUBLIC_URL)
return (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">

      <Cabecera
                titulo = 'La cocina de la Pipi' 
                logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
                enlaces={enlacesNav}
      />

    <main>
        <Switch>
          <Route path="/precios">
            <TablaPrecios listado={ListaProductos} />
          </Route>
              
          <Route path="/productos/:familia/:id">
            <ItemListContainer listado={ListaProductos} />
          </Route>

          <Route path="/productos/:familia">
            <ItemListContainer listado={ListaProductos} />
          </Route>

          <Route path="/productos">
            <ItemListContainer listado={ListaProductos} />
          </Route>
          
          <Route path="/recetas">
            <h2>Recetas</h2>
          </Route>
          
          <Route path="/pedidos">
            <h2>Pedidos</h2>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/">
            <OnLoadPage/>
          </Route>
              
        </Switch>
      </main>

      <Footer
        titulo = 'La cocina de la Pipi'
        logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
        enlaces={EnlacesNav()}
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