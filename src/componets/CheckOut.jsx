import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { sendOrder } from '../firebase/firebase'; 
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const [cart, , , , clearCart] = useContext(CartContext); 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      items: cart,
      buyer: formData,
      date: new Date(),
    };

    
    const orderId = await sendOrder(order);
    alert(`Tu orden ha sido creada. ID de la orden: ${orderId}`);
    
    
    clearCart();

   
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl text-white mb-4">Finalizar Compra</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-lg p-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-white mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
