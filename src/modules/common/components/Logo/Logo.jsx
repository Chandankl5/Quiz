import Image from 'next/image'
import React from 'react';

function Logo() {
  return (
    <Image
      src='/logo.png'
      alt='Logo'
      width={145}
      height={35}
    />
  )
}

export default Logo