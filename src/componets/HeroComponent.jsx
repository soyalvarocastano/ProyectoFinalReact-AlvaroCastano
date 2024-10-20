export default function HeroComponent() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4646] to-[#000004] opacity-20"
          style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4646] to-[#000004] opacity-20"
          style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
        ></div>
      </div>

      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
         
          <div className="text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Music Store</h2>
            <h4 className="text-4xl font-bold tracking-tight text-white sm:text-2xl mt-2">Sobre nosotros</h4>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Somos una empresa especializada en la venta de productos musicales. Contamos con una amplia gama de productos
              para satisfacer cualquier necesidad, desde guitarras, pianos y micrófonos. Aun con nuestro poco tiempo en el
              mercado, ya hemos marcado diferencia en la venta de productos por la más alta calidad.
            </p>
          </div>

         
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react-23807.appspot.com/o/premium_photo-1664194584456-c25febbccb2a.jpg?alt=media&token=48d8119b-fa77-4107-a0c9-1ac6dd6e0726"
              alt="Imagen de fondo instrumentos musicales"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
