import './App.css';

import Cabecera from './components/header/Header'


function App() {
  return (
    <div className="App">
      <Cabecera
      titulo = 'La cocina de la Pipi' 
      logo = './images/logo-transparente.png'
      enlaces={
              [
                ['Home','#home'],
                ['Precios','#precios'],
                ['Productos','#productos'],
                ['Recetas','#recetas'],
                ['Pedidos','#pedidosa'],
              ]
            }
        />
   </div>
  );
}

export default App;
