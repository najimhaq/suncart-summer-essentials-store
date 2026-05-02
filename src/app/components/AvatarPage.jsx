import { useState } from 'react';
import Image from 'next/image';

export default function Avatar({ name, image, size = 40 }) {
  const [imgError, setImgError] = useState(false);


  const colorBg = 'bg-sunset';

  if (image && !imgError) {
    return (
      <Image
        src={image}
        alt={`${name}'s avatar`}
        width={size}
        height={size}
        className='rounded-full object-cover'
        onError={() => setImgError(true)}
      />
    );
  }


  return (
    <div
      className={`flex items-center justify-center rounded-full ${colorBg} text-white font-bold`}
      style={{ width: size, height: size, fontSize: size / 2 }}
    >
      {name?.charAt(0).toUpperCase() || '?'}
    </div>
  );
}
