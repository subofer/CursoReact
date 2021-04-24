import './App.css';

import Cabecera from './components/header/Header'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import {EnlacesNav } from './components/values/values'


function App() {
return (
    <div className="App">
      
      <Cabecera
      titulo = 'La cocina de la Pipi' 
      logo = {process.env.PUBLIC_URL + '/images/logo-transparente.png'}
      enlaces={EnlacesNav()}
        />
        <main>
                <ItemListContainer/>
      
        </main>

   </div>
  );
}

export default App;