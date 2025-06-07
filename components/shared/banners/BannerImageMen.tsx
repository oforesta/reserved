import Image from 'next/image';
import React from 'react';


const BannerImageMen = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image src="/reserved-men.avif" alt="New collection" className="object-cover filter brightness-70" fill priority />
    </div>
  );
}

export default BannerImageMen;
