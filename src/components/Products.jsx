import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  const {products, addToCart} = useContext(AppContext);
  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className='Products'>
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.attributes.id} product={product.attributes} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;