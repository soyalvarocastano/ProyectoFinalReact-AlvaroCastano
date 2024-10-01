import ContactForm from "../../componets/ContactForm.jsx"
import Footer from "../../componets/Footer.jsx"
import HeroComponent from "../../componets/heroComponent"
import ItemListContainer from "../../componets/ItemListContainer.jsx"

export default function HomeView(){
    return(
        <>
        <HeroComponent/>
        <ItemListContainer/>
        <ContactForm/>
        <Footer/>
        </>
    )
}