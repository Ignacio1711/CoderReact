import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  
  const [items,setItems]=useState([])

  const {idCategory} = useParams() 
 
  //Dentro del useEffect va todo lo que ejecuta una sola vez.

  useEffect(()=>{
    const products = [{ id:1, name: "Ultraboost 22" ,  category: "shoes" , brand: "Adidas",  price: "46000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG", desc:"" },
         { id:2, name: "Adizero RC" ,  category: "shoes" , brand: "Adidas",  price: "26000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG", desc:""},
         { id:3, name: "Pegasus 39" ,  category: "shoes" , brand: "Nike",  price: "39000", img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG" , desc:"Zapatilla mixta especialmente diseñada para tus entrenamientos de series y rodajes largos."},
         { id:4, name: "Fenix740" ,  category: "watch" , brand: "Garmin",  price: "70000", img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG" , desc:""},
         { id:5, name: "M300" ,  category: "watch" , brand: "Polar",  price: "65000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG" , desc:""},
          { id:6, name: "Peregrine12" ,  category: "trail" , brand: "Saucony",  price: "37000", img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG", desc:""}]
    
     // Armo la promesa con el timeout
    const miPromesa = new Promise ((res, ref) =>{
      setTimeout(()=>{
        if (!idCategory) {
          res(products)
        }else{
          res(products.filter((producto)=>producto.category === idCategory))
        }
        
      }, 2000)
    })

    //Llamo a la promesa y si se ejecuta bien, llama al modificador de estado de item.
    miPromesa.then((res)=>{
      setItems(res)
    })

},[idCategory])
       

// armo la promesa con el setTimeout


return (
    <>
      <h1>Nuestros Productos</h1>
        <ItemList items={items} />
    </>
    
  )
}

export default ItemListContainer