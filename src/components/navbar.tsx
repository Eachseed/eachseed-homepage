import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

export default function Navbar() {
  return (
    <nav className="h-24 flex flex-col items-center justify-center">
        <div className="container mx-auto px-3 flex flex-row justify-between">

            <Image src='/logo.svg' width={125} height={100} alt='Eachseed logo' />
            <div className="flex flex-row gap-3 items-center">
                <ul className='list-none flex flex-row gap-4 items-center'>
                    <li>
                        <Link href="/" className='hover:underline hover:font-bold hover:text-green-500 transition-all delay-200'>Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className='hover:underline hover:font-bold hover:text-green-500 transition-all delay-200'>About</Link>
                    </li>
                    <li>
                        <Link href="#steps" className='hover:underline hover:font-bold hover:text-green-500 transition-all delay-200'>How it Works</Link>
                    </li>
                    <li>
                        <Link href="#earlyaccess" className='hover:underline hover:font-bold hover:text-green-500 transition-all delay-200'>Early Access</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="" className={buttonVariants({
                            variant: 'default',
                            size: 'lg'
                        })}>Get early access</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
