import './App.css';
import logo from '../../distribuidoradeloeste/src/imagenes/logo.png';

import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Distribuidora del Oeste!" />
        
        
      </header>
    </div>
  );
}

export default App;
