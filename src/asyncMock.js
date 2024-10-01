
import {Beta, Condensador, fender,
    Inalambrico,
    MartinEspecial,
    Nord,
    PianoBlanco,
    PianoLand,
    PianoYamaha,
    Shure,
    Taylor,
    YamahaNegra} from "../imagenes"
const products = [
  {
    id: 1,
    nombre: "Taylor 414ce",
    descripcion:
      "V-Class edicion especial gran auditorio.",
    precio: 2999,
    imagen: Taylor,
    categoryId: "Guitarras",
  },
  {
    id: 2,
    nombre: "Yamaha F335",
    descripcion: "Guitarra acustica negra.",
    precio: 189.99,
    imagen: YamahaNegra,
    categoryId: "Guitarras",
  },
  {
    id: 3,
    nombre: "Martin Special Dreadnought X1AE",
    descripcion:
      "Guitarra electroacustica natural.",
    precio: 649.99,
    imagen: MartinEspecial,
    categoryId: "Guitarras",
  },
  {
    id: 4,
    nombre: "Fender FA-135CE",
    descripcion:
      "Guitarra electroacustica de concierto Sunburst.",
    precio: 199.99,
    imagen: fender,
    categoryId: "Guitarras",
  },
  {
    id: 5,
    nombre: "Nord Stage 4 88",
    descripcion:
      "Diseño de panel intuitivo, un teclado de 88 teclas de triple sensor totalmente ponderado.",
    precio: 5699,
    imagen: Nord,
    categoryId: "Pianos",
  },
  {
    id: 6,
    nombre: "Piano digital Yamaha",
    descripcion: "Teclado digital piano negro.",
    precio: 1599,
    imagen: PianoYamaha,
    categoryId: "Pianos",
  },
  {
    id: 7,
    nombre: "Roland RD-88EX",
    descripcion:
      "Teclado de escenario Roland RD-88EX negro.",
    precio: 2999,
    imagen: PianoLand,
    categoryId: "Pianos",
  },
  {
    id: 8,
    nombre: "KORG Grandstage X",
    descripcion: "Piano de escenario blanco.",
    precio: 2999,
    imagen: PianoBlanco,
    categoryId: "Pianos",
  },
  {
    id: 9,
    nombre: "Shure SM58",
    descripcion:
      "Micrófono dinámico cardioide con cable Shure SM58 Special Black Edition.",
    precio: 99.0,
    imagen: Shure,
    categoryId: "Microfonos",
  },
  {
    id: 10,
    nombre: "Shure BETA 58A",
    descripcion:
      "Micrófono vocal dinámico supercardioide Shure BETA 58A.",
    precio: 169.99,
    imagen: Beta,
    categoryId: "Microfonos",
  },
  {
    id: 11,
    nombre: "Warm Audio WA-8000",
    descripcion:
      "Micrófono de condensador de tubo de diafragma grande Warm Audio WA-8000, color negro.",
    precio: 1199,
    imagen: Condensador,
    categoryId: "Microfonos",
  },
  {
    id: 12,
    nombre: "Shure BLX24R/SM58",
    descripcion:
      "Sistema inalámbrico Shure BLX24R/SM58 con receptor montable en rack y cápsula de micrófono SM58 Band H9.",
    precio: 429.0,
    imagen: Inalambrico,
    categoryId: "Microfonos",
  },
];

export const getProducts = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  }
);

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};
