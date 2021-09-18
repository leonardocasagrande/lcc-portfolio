import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import { Button } from '@material-ui/core';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Button>
        <Image src="/logo.png" alt="Leonardo Casagrande" width={50} height={80} />
      </Button>
    </Link>
  )
}

export default Logo;