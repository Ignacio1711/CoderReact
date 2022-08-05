import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({id,nombre,marca, precio}) => {
 
        return (
            <>
                    
                        <div className='card' style={{width:400}}>
                            <div>Nombre: {nombre}</div>
                            <div>Marca : {marca} </div>
                            <div>Precio : {precio} </div>
                            <ItemCount />
                            <Link to={`/item/${id}`}>ver detalles</Link>
                        </div>
                    
                
            </>
        )
}

export default Item