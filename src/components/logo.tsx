import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="rd-md"
        src="/eventScout.png"
        alt="EVENT SCOUT"
        width={45}
        height={12}
      />
    </Link>
  );
}
