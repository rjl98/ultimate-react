// import Card, { CardBody } from "./components/Card";
// import List from "./components/List";
// import Button from "./components/Button";
// import { useState } from "react";

// function App() {
//   const list: string[] = ["Goku", "Tanjiro", "Chanchito feliz"];

//   const handleSelect = (elemento: string) => {
//     console.log("imprimiendo", elemento);
//   };

//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   return (
//     <Card>
//       <CardBody title="Hola Mundo" text="Este es el texto" />
//       {list.length !== 0 ? (
//         <List data={list} onSelect={handleSelect} />
//       ) : (
//         "No hay contenido"
//       )}
//       <Button click={click} onClick={handleClick}>
//         Hola Mundo
//       </Button>
//     </Card>
//   );
// }
// export default App;

// import Card from "./components/Card";
// import List from "./components/List";
// import Button from "./components/Button";
// import { useState } from "react";
// import Alert from "./components/Alert";

// function App() {
//   const array = ["Goku", "Tanjiro", "Chanchito feliz"];
//   const [list, setList] = useState(array);
//   const addMinion = () => setList([...list, "Minion"]);
//   const delMinion = () => setList(list.slice(0, -1));
//   const defaultList = () => setList(array);
//   const [color, setColor] = useState(false);
//   return (
//     <Card>
//       <Button onClick={addMinion}>Agregar</Button>
//       <Button onClick={delMinion}>Eliminar</Button>
//       <Button onClick={defaultList}>Resetear</Button>
//       {list.length !== 0 ? <List data={list} /> : "No hay contenido"}
//       <Alert color={color} onClick={() => setColor(!color)}>
//         Alert
//       </Alert>
//     </Card>
//   );
// }
// export default App;

// import { useState } from "react";
// import { IoIosSend } from "react-icons/io";
// import { FaCheck } from "react-icons/fa";
// import Send from "./components/Send";

// function App() {
//   const [status, setStatus] = useState(false);

//   const btnText = status ? "Enviado" : "Enviar";
//   const btnIcon = status ? <FaCheck size={15} /> : <IoIosSend size={15} />;

//   return (
//     <Send status={status} onClick={() => setStatus(true)}>
//       <span style={{ marginRight: 5 }}>{btnText}</span>
//       {btnIcon}
//     </Send>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   console.log(new Date().getTime());

//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Enviar</button>
//       {new Date().getTime()}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [products, setProducts] = useState([{ name: "Iphone" }]);
//   const handleClick = () => {
//     // let newProducts = [...products, { name: "Android" }];
//     // setProducts(newProducts);
//     setProducts(prevState => [...prevState, {name: "Android"}]);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Agregar</button>
//       <ul>
//         {products.map((product) => (
//           <li key={product.name}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [product, setProduct] = useState({
//     name: "Iphone",
//     stock: 25,
//     address: {
//       number: 42,
//       street: "Queen st",
//     },
//   });
//   const handleClick = () => {
//     let newProduct = { ...product, name: "Android" };
//     setProduct(newProduct);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Agregar</button>
//       <p>
//         {product.name} {product.stock}
//       </p>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [product, setProduct] = useState({
//     name: "Iphone",
//     stock: 25,
//     address: {
//       number: 42,
//       street: "Queen st",
//     },
//   });
//   const handleClick = () => {
//     let newProduct = {
//       ...product,
//       address: { ...product.address, number: 45 },
//     };
//     setProduct(newProduct);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Agregar</button>
//       <p>
//         {product.name} {product.stock}
//       </p>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Iphone",
//     },
//   ]);
//   const handleClick = () => {
//     // agregarlo al final
//     // const newProduct = { id: 2, name: "Android" };
//     // const newProducts = [...products, newProduct];
//     // agregar al comienzo
//     // const newProducts = [newProduct, ...products];

//     // modificar un producto
//     // const newProducts = products.map((p) =>
//     //   p.id == 1 ? { ...p, name: "Windows" } : p
//     // );

//     // Eliminar producto
//     const newProducts = products.filter((p) => p.id != 1);
//     setProducts(newProducts);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Agregar</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import ProductDashboard from "./components/ProductDashboard";
// import ProductList from "./components/ProductList";
// import ProductButton from "./components/ProductButton";

// function App() {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Iphone",
//     },
//   ]);
//   const handleClick = () => {
//     const newProduct = { id: 2, name: "Android" };
//     setProducts([...products, newProduct]);
//   };
//   return (
//     <div>
//       <ProductDashboard amount={products.length} />
//       <ProductButton onClick={handleClick}>Enviar</ProductButton>
//       <ProductList products={products} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import ProductList from "./components/ProductList";
// import ProductButton from "./components/ProductButton";

// function App() {
//   const [products, setProducts] = useState([
//     {
//       id: Math.random().toString(),
//       name: "Iphone",
//     },
//   ]);

//   const newProduct = { id: Math.random().toString(), name: "Android" };

//   const comienzo = () => setProducts([newProduct, ...products]);
//   const final = () => setProducts([...products, newProduct]);
//   const eliminar = () => setProducts(products.slice(0, -1));
//   const limpiar = () => setProducts([]);

//   return (
//     <div>
//       <ProductButton onClick={comienzo}>Comienzo</ProductButton>
//       <ProductButton onClick={final}>Final</ProductButton>
//       <ProductButton onClick={eliminar}>Eliminar Ultimo</ProductButton>
//       <ProductButton onClick={limpiar}>Limpiar</ProductButton>
//       <ProductList products={products} />
//     </div>
//   );
// }

// export default App;

// import Form from "./components/Form";

// function App() {
//     return (
//         <div className="container">
//             <Form />
//         </div>
//     );
// }

// export default App;

// import CMS from "./CMS/CMS";

// const App = () => {
//     return <CMS />;
// };

// export default App;

// import Dashboard from "./components/Dashboard";
// import MainContent from "./components/MainContent";
// import TodosProvider from "./providers/TodosProvider";
// import UserProvider from "./providers/UserProvider";

// function App() {
//     console.log("App");
//     return (
//         <TodosProvider>
//             <UserProvider>
//                 <Dashboard />
//                 <MainContent />
//             </UserProvider>
//         </TodosProvider>
//     );
// }

// export default App;
