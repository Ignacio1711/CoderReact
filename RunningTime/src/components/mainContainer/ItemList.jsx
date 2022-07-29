import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
  return (
      <>
      <div>
        {
             items.map ((producto)=>{
                <Item key= {producto.id} modelo={producto.modelo} marca={producto.marca} color={producto.color}/>
                 }
             )
        }
      </div>
      </>
    
  )
}

export default ItemList