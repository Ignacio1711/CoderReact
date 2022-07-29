import React from 'react'

const Item = ({modelo,marca,color}) => {
 
        return (
          <div >
            <div>Modelo : {modelo} </div>
            <div>Marca : {marca} </div>
            <div>Color : {color} </div>
          </div>
      
        )
  
}

export default Item