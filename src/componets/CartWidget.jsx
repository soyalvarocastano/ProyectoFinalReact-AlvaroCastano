import { FaShoppingCart } from 'react-icons/fa'; 

export default function CartWidget(){
    return(
        <div className="flex-shrink-0">
          <FaShoppingCart className="h-6 w-6" /><span className="text-lg">0</span>
        </div>
    )

}