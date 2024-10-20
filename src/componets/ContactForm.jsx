import { useState } from "react";
import Swal from "sweetalert2";
import { sendContactMessage } from "../firebase/firebase"; 

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactMessage(formData); 
      Swal.fire({
        icon: "success",
        title: "¡Mensaje Enviado!",
        text: "Pronto nos contactaremos con usted.",
        timer: 2000,
        showConfirmButton: false,
      });
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        mensaje: "",
      }); 
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el mensaje. Intente nuevamente.",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center py-3 text-2xl font-bold text-black">CONTACTANOS</h2>
      <form
        className="mx-auto bg-gray-800 p-6 rounded-lg"
        style={{ maxWidth: "600px" }}
        onSubmit={handleSubmit} 
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-3">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 ">Nombre</label>
            <input
              type="text"
              className="p-1 mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="nombre"
              name="nombre"
              placeholder="Ingrese su nombre"
              value={formData.nombre}
              onChange={handleChange} 
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-300">Apellido</label>
            <input
              type="text"
              className="p-1 mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="apellido"
              name="apellido"
              placeholder="Ingrese su apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-300">Teléfono</label>
            <input
              type="tel"
              className="p-1 mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="telefono"
              name="telefono"
              placeholder="Ingrese su número"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="p-1 mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="email"
              name="email"
              placeholder="ejemplo@outlook.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:col-span-2 mb-3">
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300">Mensaje</label>
            <textarea
              className="p-1 mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              id="mensaje"
              name="mensaje"
              rows="4"
              placeholder="Envíanos tu consulta."
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-red-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}


        