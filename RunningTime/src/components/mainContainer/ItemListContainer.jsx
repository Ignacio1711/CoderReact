import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
  
  const [items,setItems]=useState([])

  useEffect(()=>{
    setItems([
      {
       id:1,
       modelo:"Sport" ,
       marca: "Nike",
       color: "Red"
      },
      {
      id:2,
      modelo:"Casual" ,
      marca: "Puma",
      color: "White"},
      {  
      id:3,  
      modelo:"Formal" ,
      marca: "CAT",
      color: "Brown"
     },
     {
      id:4,
      modelo:"Casual" ,
      marca: "Timberland",
      color: "Brown"
     },
     { 
     id:5,
     modelo:"Run" ,
     marca: "Rebook",
     color: "Purple"
    }]
    )
  },[])


  // aca tengo que hacer la promesa con el timeout


  return (
    <>
      <h1>{greeting}</h1>
      <ItemList items={items} />

      <ItemCount />
    </>
    
  )
}

export default ItemListContainer