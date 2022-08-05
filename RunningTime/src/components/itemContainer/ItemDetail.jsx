import React from 'react'
import ItemCount from '../mainContainer/ItemCount'

export default function ItemDetail({item}) {

  return (
    <>
                <div className='card' style={{width:400}}>
                    <img src={item.img} alt="" /> 
                    <div> <strong>Nombre : </strong> {item.brand} </div>
                    <div> <strong>Categoria :</strong>  {item.category} </div>
                    <div> <strong>Marca:</strong>  {item.brand} </div>
                    <div><strong>Descripción: </strong> {item.desc}</div>
                    <div><strong> Precio: </strong>{item.price} </div> 

                    <ItemCount />
                </div>
            </>
  )
}
