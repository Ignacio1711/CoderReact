import React from 'react'
import ItemCount from './ItemCount'

const Item = ({id,modelo,marca,color}) => {
 
        return (
            <>
                <div className='card' style={{width:400}}>
                    <div>ID: {id}</div>
                    <div>Modelo : {modelo} </div>
                    <div>Marca : {marca} </div>
                    <div>Color : {color} </div>
                    <ItemCount />
                </div>
            </>
          
      
        )
  
}

export default Item