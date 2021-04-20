import './App.css';

import Cabecera from './components/header/Header'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import {ListaProductos, EnlacesNav } from './components/values/values'


function App() {
return (
    <div className="App">
      <Cabecera
      titulo = 'La cocina de la Pipi' 
      logo = './images/logo-transparente.png'
      enlaces={EnlacesNav()}
        />
        <main>
          <ItemListContainer props = {ListaProductos()}/>
        </main>

   </div>
  );
}

export default App;