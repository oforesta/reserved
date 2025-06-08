import React from 'react';
import ProductCard from './ProductCard';

const ProductCardPannel = () => {
  return (
    <div className='flex items-center justify-between'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductCardPannel;
