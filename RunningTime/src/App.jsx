import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/mainContainer/ItemListContainer'

function App() {
 
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola Humano" />
    </>
  )
}

export default App 
