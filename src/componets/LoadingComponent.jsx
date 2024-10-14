import { useEffect } from "react"
import { useState } from "react"
import ItemListContainer from "./ItemListContainer"
import ReactLoading from "react-loading"

export default function LoadingComponent(){

const [isLoading, setIsLoading]= useState(true)

useEffect(()=>{
    const timer = setTimeout(()=>{
        setIsLoading(false)
    },3000);

    return()=> clearTimeout(timer)
},[])

    return(
    <>
    {isLoading ? (<ReactLoading type="bubbles" color="red" height="80px" width= "80px" />) : (<ItemListContainer/> )}
    </>
    )
}