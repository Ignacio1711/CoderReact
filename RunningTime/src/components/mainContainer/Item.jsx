import React from 'react'
import ItemCount from './ItemCount'

const Item = ({id,nombre,marca, categoria, precio}) => {
 
        return (
            <>
                <div>
                    <div className='card' style={{width:400}}>
                        <div>Nombre: {nombre}</div>
                        <div>Marca : {marca} </div>
                        <div>Precio : {precio} </div>
                        <ItemCount />
                    </div>
                </div> 
            </>
        )
}

export default Item