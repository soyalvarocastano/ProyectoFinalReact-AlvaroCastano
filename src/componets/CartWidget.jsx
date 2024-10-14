
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
    const [cart] = useContext(CartContext);

    return (
        <Link to="/Cart" className="flex-shrink-0 flex items-center"> 
            <FaShoppingCart className="h-6 w-6" />
            <span className="text-lg"> {cart.length} </span>
        </Link>
    );
}
