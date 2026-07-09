import { routes } from '@/lib/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
            <Link href={routes.home}>
                <Image src="/icon.jpeg" alt="logo" width={40} height={40} className='rounded-full' />
            </Link>
            <nav className="flex items-center gap-4">
                <Link href={routes.home} className='font-medium text-brown hover:text-amber-900'>Home</Link>
                <Link href={routes.search} className=' font-medium text-brown hover:text-amber-900'>Search</Link>
              
            </nav>
        </div>
    </header>
  )
}

export default Navbar