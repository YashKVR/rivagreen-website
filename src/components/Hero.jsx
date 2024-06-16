import React from 'react'
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <div className='w-dvw h-dvh flex flex-col items-center justify-center px-[3%] space-y-5 bg-[#FFF5E1]'>
            <p className='text-4xl text-bold'>THE FUTURE OF BATTERY TECHNOLOGY</p>
            <p className='text-2xl text-semibold'>Discover The Right Battery and Electrification Solutions With RIVAA.</p>
            {/* <button className='py-1 px-3 bg-black text-white hover:bg-gray-700 rounded-md'>Call To Action</button> */}
            <Button variant='default' size='lg'>Call To Action</Button>
        </div>
    )
}

export default Hero