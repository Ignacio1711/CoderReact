import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/mainContainer/ItemListContainer'
import ItemDetailContainer from './components/itemContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/mainContainer/Cart'
import CartContext from './components/context/CartContext'


function App() {

return (
<>
  <CartContext>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  </CartContext>

</>
)
}

export default App