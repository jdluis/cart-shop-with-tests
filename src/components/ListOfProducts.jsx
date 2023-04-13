import SingleProduct from "./SingleProduct.jsx";
import React from 'react'
function ListOfProducts(props) {
    const {products, handleAdd}  = props
  return (
    <div>
        {products &&
          products.map((product) => {
            return (
              <SingleProduct product={product} handleAdd={handleAdd} key={product.id} />
            );
          })}
    </div>
  );
}

export default ListOfProducts;
