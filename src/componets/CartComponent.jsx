import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
    const [cart, , , removeItem, clearCart, , incrementQuantity, decrementQuantity] = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/CheckOut'); 
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
            <h1 className="text-3xl text-white mb-4">Carrito</h1>
            {cart.length === 0 ? (
                <p className="text-white">Tu carrito está vacío.</p>
            ) : (
                <div className="bg-gray-800 rounded-lg shadow-lg p-4 w-full max-w-3xl">
                    {cart.map((item, index) => (
                        <div key={index} className="flex justify-between p-2 border-b border-gray-700">
                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
                            <div className="flex flex-col justify-center ml-4">
                                <h2 className="text-white font-bold">{item.name}</h2>
                                <p className="text-gray-300">{item.price} €</p>
                                <div className="flex items-center mt-2">
                                    <button onClick={() => decrementQuantity(index)} className="bg-red-600 text-white px-2 py-1 rounded">-</button>
                                    <span className="mx-2 text-white">{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(index)} className="bg-green-600 text-white px-2 py-1 rounded">+</button>
                                </div>
                                <button onClick={() => removeItem(index)} className="mt-2 bg-red-500 text-white px-4 py-1 rounded">Eliminar</button>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-white mt-4">Total: {calculateTotal()} €</h2>

                    <div className="flex justify-between mt-4">
                        <button 
                            onClick={clearCart} 
                            className="bg-red-600 text-white px-4 py-2 rounded">
                            Vaciar Carrito
                        </button>
                        <button 
                            onClick={handleCheckout} 
                            className="bg-red-600 text-white px-4 py-2 rounded">
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartComponent;

