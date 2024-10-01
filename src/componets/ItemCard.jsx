import { Link } from "react-router-dom";

export default function ItemCard({ product }) {
  return (
    <>
      <article className="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 bg-gray-800">
       
        <img
          className="w-auto h-auto object-cover"
          src={product.imagen}
          alt={product.nombre}
        />

        
        <div className="p-4 text-center">
          <h2 className="font-bold text-xl mb-2 text-white">{product.nombre}</h2>
          <p className="text-gray-300 text-base mb-4">{product.descripcion}</p>
          <p className="font-bold text-lg text-red-500">{product.precio} €</p>
        </div>

       
        <div className="flex justify-center mb-4">
          <button className="bg-slate-50 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            <Link to={`/Item/${product.id}`}>Detalles</Link>
          </button>
        </div>
      </article>
    </>
  );
}
