import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import logo from './imagenes/logo.png';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { getFirestore, doc, getDoc, getCollection, getDocument } from "./utils/getFirestore";

function App() {

  const [categoria, setCategoria] = useState();

  useEffect(() => {
    getCollection("categorias").then((result) => {
      setCategoria(result);
    });

    getDocument("categorias", "DWC3iBNoKrEuzvbkBlPf").then((result) => {
      console.log(result);
    });
  }, []);


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element= {<ItemDetailContainer />} />
        
      </Routes>
    </BrowserRouter>
  );
}









export default App;
