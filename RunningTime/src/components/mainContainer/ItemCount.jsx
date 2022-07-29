import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
 
    const [value, setValue] = useState(0);
    const [stock, setStock] = useState(5);
    let initial = 5

    const  addItem= () => {
     if (value < initial) {
        setValue(value+1)
        setStock(stock-1)
     }
    }

    const subtractItem =() =>{
        if (value > 0) {
            setValue(value-1)
            setStock(stock+1)
    }
}

  return (
      <>
      
        <div className="card" style={{width:300}}>
         <div className="card-body">
                    <p className="card-text">Stock disponible:  {stock}</p>
                    <button type="button" className="btn btn-light" onClick={subtractItem}><strong>-</strong> </button>
                    <label> <strong>{value}</strong> </label>
                    <button type="button" className="btn btn-light" onClick={addItem}><strong>+</strong></button>
                    <button type="button" className="btn btn-success">Agregar al carrito</button>
            </div>
        </div> 
      </>
    
  )
}

export default ItemCount