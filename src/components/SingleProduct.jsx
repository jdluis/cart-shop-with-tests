function SingleProduct(props) {
  const {product, handleAdd} = props;
  return (
    <div >
      <h2>{product.title}</h2>
      <p>{product.description}</p>{" "}
      <button onClick={() => handleAdd(product.id)}>Add to Cart</button>
    </div>
  );
}

export default SingleProduct;
