import ContactForm from "../../componets/ContactForm.jsx"
import Footer from "../../componets/Footer.jsx"
import HeroComponent from "../../componets/HeroComponent.jsx"
import ItemListContainer from "../../componets/ItemListContainer.jsx"

export default function HomeView(){
    return(
        <>
        <HeroComponent/>
        <ItemListContainer/>
        <hr className="my-8 border-t-2 border-gray-300 opacity-50" />
        <ContactForm/>
        <Footer/>
        </>
    )
}