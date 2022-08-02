import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  
  const [items,setItems]=useState([])

  //Dentro del useEffect va todo lo que ejecuta una sola vez.

  useEffect(()=>{
    const products = [{ id:1, modelo:"Sport" , marca: "Nike",  color: "Red"  },
      { id:2, modelo:"Casual" , marca: "Puma",  color: "White"},
      { id:3, modelo:"Formal" , marca: "CAT", color: "Brown"},
      { id:4, modelo:"Casual" , marca: "Timberland", color: "Brown"},
      { id:5, modelo:"Run" ,  marca: "Rebook", color: "Purple"}]

  // Armo la promesa con el timeout
    const miPromesa = new Promise ((res, ref) =>{
      setTimeout(()=>{
        res(products)
      }, 2000)
    })

    //Llamo a la promesa y si se ejecuta bien, llama al modificador de estado de item.
    miPromesa.then((res)=>{
      setItems(res)
    })

},[])
       

// armo la promesa con el setTimeout


return (
    <>
      <h1>Nuestros Productos</h1>
        <ItemList items={items} />
    </>
    
  )
}

export default ItemListContainer