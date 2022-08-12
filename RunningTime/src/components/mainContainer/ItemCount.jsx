import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContext';



const ItemCount = (nombre, marca, precio) => {
    const {cart, setCart} = useContext(cartContext) // preparo el uso del contexto

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

const onAdd =() =>{
  if (value > 0){
    const ItemCountContainer = document.getElementById("itemCountContainer")
    ItemCountContainer.style.display = "none"
    const checkout= document.getElementById("checkout")
    checkout.style.display = "block"
    // envío el objeto al contexto
    cart.push = {id: id, nombre: nombre, marca: marca, precio: precio, cantidad: value }

  }
 
}

  return (
      <>
      
        <div className="" style={{width:300}}>
         <div className="card-body">
                    <p className="card-text">Stock disponible:  {stock}</p>
                    <div id="itemCountContainer">
                      <button type="button" className="btn btn-light" onClick={subtractItem} style={{margin:10}}><strong>-</strong> </button>
                      <label> <strong>{value}</strong> </label>
                      <button type="button" className="btn btn-light" onClick={addItem} style={{margin:10}}><strong>+</strong></button>
                      <br />
                      <button type="button" className="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
                    </div>
                    <br />
                    <div id="checkout" style={{display:"none", marginTop:10}}>
                    <Link to="/cart"><button type="button" className="btn btn-success"> Finalizar Compra</button></Link>
                    </div>
            </div>
        </div> 
      </>
    
  )
}

export default ItemCount