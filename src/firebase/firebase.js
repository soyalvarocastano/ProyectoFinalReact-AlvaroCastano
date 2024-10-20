
import { initializeApp } from "firebase/app";
import {getFirestore,doc, getDoc, addDoc,getDocs, collection, query,where, updateDoc} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDsfE8BxywTs4yosUvla8Nry9UufZ0cLVs",
  authDomain: "ecommerce-react-23807.firebaseapp.com",
  projectId: "ecommerce-react-23807",
  storageBucket: "ecommerce-react-23807.appspot.com",
  messagingSenderId: "294353469212",
  appId: "1:294353469212:web:42c0f764408b5593a304d9"
};


const app = initializeApp(firebaseConfig);

const db= getFirestore(app);


export async function getSingleProduct(id){
    const documentRef = doc(db,"items",id);

    try{
        const snapshot = await getDoc(documentRef);
        if(snapshot.exists()){
            return snapshot.data();
        }else{
            console.log("El docuumento no existe")
        }
    }catch(error){
        console.log("error al obtener el documento: ", error)
    }
}

export async function getProducts(){

    try{
        const querySnapshop = await getDocs(collection(db,"items"));
        if (querySnapshop.size !== 0){
            
            const itemsList= querySnapshop.docs.map(docu =>{
                return{
                    id: docu.id,
                    ...docu.data()
                }
            })
            return itemsList; 
        }else{
            console.log("coleccion vacia")
        }
    }catch(error){
        console.log("error al obtener el documento: ", error)
    }
}

export async function filterProductsByPrice(categoryId) {
    try {
      const filteredQuery = query(
        collection(db, 'items'),
        where("categoryId", "=", categoryId)
      );
      const querySnapshot = await getDocs(filteredQuery);
      if (querySnapshot.size !== 0) {
        const itemsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return itemsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }


export async function sendOrder(order) {
    const ordersCollection = collection(db, 'orders');
  
    try {
      const docRef = await addDoc(ordersCollection, order);
      console.log('Nueva orden generada: ' + docRef.id);
      return docRef.id;
    } catch (error) {
      console.log('Error al agregar el documento: ' + error);
    }
  }

  
  export async function updateProduct(id, toUpdate){
    const itemRef =doc(db, "items",id);
    try{
       await updateDoc(itemRef, toUpdate)
      
    }catch(error){
      console.log("error al actualizar un items: " + error);
    }
  }

  export async function sendContactMessage(contactData) {
    const contactsCollection = collection(db, 'contact'); 
  
    try {
      const docRef = await addDoc(contactsCollection, contactData);
      console.log('Nuevo mensaje de contacto: ' + docRef.id);
      return docRef.id;
    } catch (error) {
      console.log('Error al agregar el mensaje: ' + error);
      throw error; 
    }
  }
  