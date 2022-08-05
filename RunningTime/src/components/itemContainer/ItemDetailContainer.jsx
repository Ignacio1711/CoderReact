import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

     const [item, setItem] = useState([])

     const {idItem} = useParams()
 

    useEffect (()=>{
        const products =[{ id:1, name: "Ultraboost 22" ,  category: "Running Shoes" , brand: "Adidas",  price: "46000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG", desc:"afadfadfafafafdadfadfasf" },
         { id:2, name: "Adizero RC" ,  category: "Running Shoes" , brand: "Adidas",  price: "26000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG", desc:"xvbxvbxvbxvbxcvbxvcb"},
         { id:3, name: "Pegasus 39" ,  category: "Running Shoes" , brand: "Nike",  price: "39000", img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG" , desc:"Zapatilla mixta especialmente diseñada para tus entrenamientos de series y rodajes largos."},
         { id:4, name: "v1080" ,  category: "Running Shoes" , brand: "New Balance",  price: "40000", img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG" , desc:"rtwrtwrtwrtwrtwert"},
         { id:5, name: "Vaporfly" ,  category: "Running Shoes" , brand: "Nike",  price: "47000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG" , desc:"fgfgsfgasgfsdfgafsg"},
          { id:6, name: "Fuel Cell Propel" ,  category: "Running Shoes" , brand: "New Balance",  price: "23000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG", desc:"56456165446541647984"}]
    

          const promesa = new Promise ((res, ref) =>{
            setTimeout(()=>{
              if (idItem){
                res(products[2])
                res(products.filter((producto)=>producto.id==idItem))
                             
              }
              else{
               
              }
              
            }, 2000)
          })
      
          //Llamo a la promesa y si se ejecuta bien, llama al modificador de estado de item.
       promesa.then((res)=>{
        setItem(res)
          })
        
    },[idItem])


  return (
      <>
      <h1>Detalle de producto</h1>
      <ItemDetail item={item}/>
      </>
    
  )
}
