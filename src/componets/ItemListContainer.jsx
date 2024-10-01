import { useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { getProducts } from "../asyncMock";
import ItemCard from "./ItemCard";
import { Link, useParams } from "react-router-dom";


export default function ItemListContainer(){
   
        const [products, setProducts]= useState([]);
        const { categoryId } = useParams();

        useEffect(()=>{
            getProducts.then(data => setProducts(data))
        },[])

   
    const productsFiltrados = useFilter(products,"categoryId",categoryId)


   
    return(
        <>
        <h2 className="text-4xl font-bold tracking-tight text-black text-center sm:text-4xl">Productos</h2>
        <div className="flex justify-center space-x-4 my-4">
        <Link to="/Productos">
          <button className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded">Todos</button>
        </Link>
        <Link to="/category/Guitarras">
          <button className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded">Guitarras</button>
        </Link>
        <Link to="/category/Pianos">
          <button className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded">Pianos</button>
        </Link>
        <Link to="/category/Microfonos">
          <button className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded">Microfonos</button>
        </Link>
      </div>


        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {productsFiltrados.map((product) => (<ItemCard key={product.id} product={product}/>) )}
        </section>
        </>
    )
}