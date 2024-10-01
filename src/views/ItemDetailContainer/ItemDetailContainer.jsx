import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../asyncMock";
import Footer from "../../componets/Footer.jsx"

export default function ItemDetailContainer(){

  // el use state es una funcion de react que nos permite almacenar informacion en una variable y poder actualizar esa variable atra vez del set.

    const [product, setProduct]= useState({})

    const {id} = useParams();

  //
    useEffect(()=>{
        setProduct(getProduct(id))
    },[id])


    return(
        <>
            
<div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      
      <div className="max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
       
        <div className="md:w-1/2 p-4">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={product.imagen}
            alt={product.nombre}
          />
        </div>

        
        <div className="md:w-1/2 p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">{product.nombre}</h2>
          <p className="text-lg mb-4 text-gray-300">{product.descripcion}</p>
          <p className="text-2xl font-bold text-red-500">{product.precio} €</p>
        </div>
      </div>
    </div>

    <Footer/>
        </>
    )
}