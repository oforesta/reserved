import Image from 'next/image';
import React from 'react';
import banner from '@/public/reserved-photo.jpg';
const BannerImage = () => {
  return (
    <div className="">
      <Image src={banner} alt="New collection Reserved 2025" 
      className="w-full h-full object-cover filter brightness-70"/>  
    </div>
  );
}

export default BannerImage;
