import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ItemCard({ product }) {

const [,,addItem] = useContext(CartContext);
const handleClick=()=>{
  addItem(product);
};

  return (
    <>
      <article className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 bg-gray-800">
       
        <img
          className="w-auto h-auto object-cover"
          src={product.imageUrl}
          alt={product.name}
        />

        
        <div className="p-4 text-center">
          <h2 className="font-bold text-xl mb-2 text-white">{product.name}</h2>
          <p className="text-gray-300 text-base mb-4">{product.description}</p>
          <p className="font-bold text-lg text-red-500">{product.price} €</p>
        </div>

       
        <div className="flex justify-center mb-4">
          <button className="bg-slate-50 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            <Link to={`/Item/${product.id}`}>Detalles</Link>
          </button>
          <button className="bg-slate-50 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" onClick={handleClick}>
            Agregar
          </button>
        </div>
      </article>
    </>
  );
}
