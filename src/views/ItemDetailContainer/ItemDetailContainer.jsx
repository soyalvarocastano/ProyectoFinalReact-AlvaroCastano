import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../firebase/firebase.js";
import Footer from "../../componets/Footer.jsx"
import LoadingComponent from "../../componets/LoadingComponent.jsx";
import { CartContext } from "../../context/CartContext.jsx"; 
import Swal from 'sweetalert2';

export default function ItemDetailContainer(){
  
    const [product, setProduct]= useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams();
    const [,, addItem] = useContext(CartContext)

    useEffect(() => {
      setIsLoading(true); 
      getSingleProduct(id).then((productData) => {
        setProduct(productData);
        setTimeout(() => {
          setIsLoading(false); 
        }, 1000);
      });
    }, [id]);

    const handleAddToCart = () => {
      addItem(product);
      Swal.fire({
        icon: 'success',
        title: 'Producto añadido al carrito',
        text: `${product.name} ha sido añadido al carrito.`,
        timer: 2000,
        showConfirmButton: false
      });
    };
  
    
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
          <button className="bg-slate-50 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" onClick={handleAddToCart} >
            Agregar
          </button>
        </div>
      
      </div>
    </div>

    <Footer/>
        </>
    )
}