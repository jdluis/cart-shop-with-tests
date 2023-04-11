import React, { useEffect, useState } from "react"; //I need to import for now, if not the test dosent work.
import axios from "axios";
import CartShop from "./components/CartShop.jsx";
import ListOfProducts from "./components/ListOfProducts.jsx";
//import products from '../data/products.json' //If data request dosent works, remember make the setProducts(products)

function App() {
  /*
Tengo que al clicar un producto añadirlo al carrito
tambien debo poder eliminarlo del carrito
SI ya se ha añadido el producto debera sumar el producto al contador y si no crear una unidad en el carrito

  */

  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resolve = await axios("https://dummyjson.com/products");
      setProducts(resolve.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddProductToTheCart = async (idProduct) => {
    try {
      const productToAdd = await axios(
        `https://dummyjson.com/products/${idProduct}`
      );
      console.log(productToAdd.data);
      setProductsInCart([...productsInCart, productToAdd.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container flex">
      <h1>Cart Shop Component with testing</h1>

      <ListOfProducts
        products={products}
        handleAdd={handleAddProductToTheCart}
      />

      <CartShop productsInCart={productsInCart} />
    </div>
  );
}

export default App;
