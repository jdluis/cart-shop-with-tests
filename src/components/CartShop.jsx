import "../styles/cart-shop.css";
import React from 'react' //Temporal, problem with jest if i dont import

function CartShop(props) {
  const { productsInCart } = props;

  const handleBuy = () => {
    console.log("All Buy")
    //Ir a la ventana de Pago (OPEN MODAL) y revision de productos a comprar
  }

  return (
    <div id="cartShop">
      <div>
        <h3>Cart</h3>
      </div>
      <div>
        {productsInCart.length === 0
          ? "Add a Product from the List"
          : productsInCart.map((product) => {
              return <p key={product.id}>{product.title}</p>;
            })}
      </div>
      <div>
          <p>Total Price: {productsInCart.reduce((acc, b) => acc + b.price, 0 )} $</p>
        <button onClick={handleBuy}>Process To Pay</button>
      </div>
    </div>
  );
}

export default CartShop;
