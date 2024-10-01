import { useEffect, useState } from "react";


export function useFilter(items,propiedad,dato){
    const [itemsFiltrados, setItemsFiltrados] = useState(items)

    useEffect(()=>{
        if(dato){
            const miFiltro = items.filter(item => item[propiedad] === dato);
            
            setItemsFiltrados(miFiltro);
            }else{
                setItemsFiltrados(items)
            }
    },[items, dato, propiedad]);


    return itemsFiltrados;

}