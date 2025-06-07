import Image from 'next/image';
import React from 'react';

const BannerImageKids = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image src="/reserved-kids.avif" alt="New Collection Kids" className="object-cover filter brightness-90" fill priority />
    </div>
  );
}

export default BannerImageKids;
