import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {

  return (
      <>
      <div className='itemList'  style={{display:"flex" , flexDirection: "row", flexWrap:"wrap", gap: 20}}>
        {           
                items.map ((producto, i)=>
                    <Item key={i} id={producto.id} nombre={producto.name} marca={producto.brand} categoria={producto.category} color={producto.color} precio={producto.price}/>
                 )
        }
      </div>
      </>
  )
}

export default ItemList