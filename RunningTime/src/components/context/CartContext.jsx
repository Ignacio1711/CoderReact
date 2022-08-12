import React, { createContext, useState } from 'react'

export const cartContext = createContext()

export default function CartContext({children}) {
    const  [cart, setCart] = useState([])
 
    function agregaItem (item) {
      let array = [...cart]
     const existe = array.find(elem => elem.id == item.id)

       if (existe){
       console.log("El elemento ya existe - ver como aumentar cantidad")
       }else{
       cart.push(item)
      console.log(cart)
       }
    }
    
    
  return (
      <>
        
        <cartContext.Provider value ={{cart, setCart, agregaItem}}>
          {children}    
        </cartContext.Provider>   
      </>
   
  )
}
