import React, { createContext, useState } from 'react'

export const cartContext = createContext()

export default function CartContext({children}) {
    const  [cart, setCart] = useState([])

  return (
      <>
        <div>CartContext</div>
        <cartContext.Provider value ={{cart, setCart}}>
            {children}    
        </cartContext.Provider>   
      </>
   
  )
}
