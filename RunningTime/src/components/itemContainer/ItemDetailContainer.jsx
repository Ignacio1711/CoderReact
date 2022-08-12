import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

     const [item, setItem] = useState([])
     const [loading, setLoading] = useState(true)

     const {idItem} = useParams()
 

    useEffect (()=>{
          const products = [{ id:1, name: "Ultraboost 22" ,  category: "shoes" , brand: "Adidas",  price: "46000", img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/84d48b725b9040b59aefadff00bc8a8d_9366/Zapatillas_Ultraboost_22_Naranja_HR1029_01_standard.jpg", desc:"Zapatilla rodadora para corredores de más de 80kg. Ideal para tus entrenamientos de largas distancias" },
         { id:2, name: "Adizero RC" ,  category: "shoes" , brand: "Adidas",  price: "26000", img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c72b4fe7eef14e9eb40eae6e0081171e_9366/Zapatillas_Adizero_RC_4_Azul_GZ0181_01_standard.jpg", desc:"Zapatilla ligera para entrenamientos de series. Ideal para corredores entre 70 y 80kg."},
         { id:3, name: "Pegasus 39" ,  category: "shoes" , brand: "Nike",  price: "39000", img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9f881305/products/NI_DH4072-001/NI_DH4072-001-1.JPG" , desc:"Zapatilla mixta especialmente diseñada para tus entrenamientos de series y rodajes largos."},
         { id:4, name: "Fenix 7" ,  category: "watch" , brand: "Garmin",  price: "70000", img: "https://stylewatch.vtexassets.com/arquivos/ids/194174-1200-auto?width=1200&height=auto&aspect=true" , desc:"Reloj especialmente diseñado para deportistas de alto rendimiento. Multiples actividades y configuraciones"},
         { id:5, name: "M300" ,  category: "watch" , brand: "Polar",  price: "65000", img:"https://www.sportlife.com.ar/img/articulos/2021/07/reloj-polar-a300-hr_sync_img1.jpg" , desc:"Reloj Polar resistente al agua con funciones de Running"},
          { id:6, name: "Peregrine12" ,  category: "trail" , brand: "Saucony",  price: "37000", img:"https://s7d4.scene7.com/is/image/WolverineWorldWide/S10737-16_1?wid=584&hei=484&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72", desc:"Zapatilla ligera diseñada para pruebas de trail running en terrenos mixtos"}]
    

          const promesa = new Promise ((res, ref) =>{
            setTimeout(()=>{
              if (idItem){
                // res(products[2])
                res(products.find((producto)=>producto.id === parseInt(idItem)))
                             
              }
              else{
               
              }
              
            }, 2000)
          })
      
          //Llamo a la promesa y si se ejecuta bien, llama al modificador de estado de item.
       promesa.then((res)=>{
        setItem(res)
          }).finally(()=>setLoading())
        
    },[idItem])


  return (
      <>
      <h1>Detalle de producto</h1>
      {loading ? (<div className="spinner-grow " role="status"></div>) : (<ItemDetail item={item}/>)}
      
      </>
    
  )
}
