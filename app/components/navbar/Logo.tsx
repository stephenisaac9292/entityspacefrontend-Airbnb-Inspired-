import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
       <Link href="/">
            <Image 
                src="/entityLogo.svg"
                alt ="Entity Space logo"
                width={110}
                height={110}
            />
        </Link>
  )
}

export default Logo