import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link href="/women">Women</Link>
      <Link href="/men">Men</Link>
      <Link href="/kids">Kids</Link>
    </div>
  );
}

export default Categories;
