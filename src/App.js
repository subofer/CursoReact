import './App.css';

import Cabecera from './components/header/Header'
import Footer from './components/footer/footer'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import {EnlacesNav } from './components/values/values'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
return (
  <BrowserRouter>
    <div className="App">
      
      <Cabecera
      titulo = 'La cocina de la Pipi' 
      logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
      enlaces={EnlacesNav()}
        />
        <main>

  <Switch>
      <Route exact path="/home">
          <h2>Home</h2>
      </Route>
      <Route exact path="/precios">
          <h2>Precios</h2>
      </Route>
      <Route exact path="/productos">
          <ItemListContainer/>
      </Route>
      <Route exact path="/recetas">
          <h2>Recetas</h2>
      </Route>
      <Route exact path="/pedidos">
          <h2>Pedidos</h2>
      </Route>
  </Switch>


        </main>
        <Footer/>

    </div>
   </BrowserRouter>
  );
}

export default App;