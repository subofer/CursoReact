import './App.css';

import Cabecera from './components/header/Header'
import Footer from './components/footer/footer'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import {EnlacesNav } from './components/values/values'
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom'


function App() {

return (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">

      <Cabecera
                titulo = 'La cocina de la Pipi' 
                logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
                enlaces={EnlacesNav()}
     />

    <main>
        <Switch>
              <Route  path='/' component={ItemListContainer}>
              
              <Route  path="/precios">
                  <h2>Precios</h2>
              </Route>
              
                  
              </Route>
              <Route  path="/recetas">
                  <h2>Recetas</h2>
              </Route>
              <Route  path="/pedidos">
                  <h2>Pedidos</h2>
              </Route>

              <Route  path="/">
                  <h2>Home</h2>
              </Route>
          </Switch>
        </main>

        <Footer/>

    </div>
   </Router>
  );
}

export default App;