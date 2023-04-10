import React, { useEffect, useState } from "react"; //I need to import for now, if not the test dosent work.
import axios from "axios";
import CartShop from "./components/CartShop.jsx";
//import products from '../data/products.json' //If data request dosent works, remember make the setProducts(products)

function App() {

  /*
Tengo que al clicar un producto añadirlo al carrito
tambien debo poder eliminarlo del carrito
SI ya se ha añadido el producto debera sumar el producto al contador y si no crear una unidad en el carrito

  */

  const [products, setProducts] = useState([])
  const [productsInCart, setProductsInCart] = useState([])
  useEffect (() => {
    getData()
  },[])

  const getData = async () => {
    try {
      const resolve = await axios('https://dummyjson.com/products');
      setProducts(resolve.data.products)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddProductToTheCart = (e) => {
    console.log(e.target) 
    setProductsInCart(...productsInCart, )
  }

  return (
    <div className="container">
      <h1>Cart Shop Component with testing</h1>

      <div>
        <ul>
        {products && products.map(product => {
          return (
            <li onClick={handleAddProductToTheCart} key={product.id}>{product.title}</li>
          )
        })}
        </ul>
      </div>

      <CartShop productsInCart={productsInCart}/>
    </div>
  );
}

export default App;
