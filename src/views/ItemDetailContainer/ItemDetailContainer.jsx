import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../firebase/firebase.js";
import Footer from "../../componets/Footer.jsx"
import LoadingComponent from "../../componets/LoadingComponent.jsx";

export default function ItemDetailContainer(){
  
    const [product, setProduct]= useState({})
  const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
      setIsLoading(true); // Inicia la carga
      getSingleProduct(id).then((productData) => {
        setProduct(productData);
        setTimeout(() => {
          setIsLoading(false); 
        }, 1000);
      });
    }, [id]);
  
    
    if (isLoading) {
      return <LoadingComponent />;
    }

    return(
        <>
            
<div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      
      <div className="max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
       
        <div className="md:w-1/2 p-4">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        
        <div className="md:w-1/2 p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg mb-4 text-gray-300">{product.description}</p>
          <p className="text-2xl font-bold text-red-500">{product.price} €</p>
          <button className="bg-slate-50 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" >
            Agregar
          </button>
        </div>
      
      </div>
    </div>

    <Footer/>
        </>
    )
}