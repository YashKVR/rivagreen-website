import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='sticky top-0 left-0 right-0 z-50'>
            <div className='flex justify-between px-[3%] items-center py-1'>

                <div>
                    <Link href="/">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={150}
                            height={30}
                            priority
                        />
                    </Link>
                </div>
                <ul className='flex space-x-5 text-xl font-bold'>
                    <Link href="/company">
                        <li className='p-1 hover:text-gray-600 hover:cursor-pointer'>Company</li>
                    </Link>
                    <Link href="/services">
                        <li className='p-1 hover:text-gray-600 hover:cursor-pointer'>Services</li>
                    </Link>
                    <Link href="/contact">
                        <li className='p-1 hover:text-gray-600 hover:cursor-pointer'>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar