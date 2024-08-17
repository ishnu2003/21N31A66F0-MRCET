import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Amount: {product.amount}</p> {/* No dollar sign */}
      <p>Version: {product.version}</p>
    </div>
  );
};

export default ProductCard;
