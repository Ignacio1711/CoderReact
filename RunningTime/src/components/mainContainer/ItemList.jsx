import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
  return (
      <>
      <div>
          <h1>Item list</h1>
        {
             items.map ((producto, i)=>
                <Item key={i} id={producto.id} modelo={producto.modelo} marca={producto.marca} color={producto.color}/>
                 
             )
        }
      </div>
      </>
    
  )
}

export default ItemList