import Image from 'next/image';
import React from 'react';

const ProductImage = () => {
  return (
    <div>
      <Image src="/sukne.avif" alt='skirt' width={250} height={700} />
    </div>
  );
}

export default ProductImage;
