import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/mainContainer/ItemListContainer'
import ItemDetailContainer from './components/itemContainer/ItemDetailContainer'


function App() {
 
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  )
}

export default App 
