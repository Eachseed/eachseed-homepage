import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { ArrowDown } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="h-24 flex flex-col items-center justify-center">
        <div className="container mx-auto px-3 flex flex-row justify-between">

            <Image src='/logo.svg' width={125} height={100} alt='Eachseed logo' />
            <div className="flex flex-row gap-3 items-center">
                <ul>
                    <li>
                        <Link href="#earlyaccess" className={buttonVariants({
                            variant: 'default',
                            size: 'lg'
                        })}>Early Access <ArrowDown/></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
