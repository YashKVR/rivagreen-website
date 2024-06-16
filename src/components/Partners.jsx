import React from 'react'

const Partners = () => {
    return (
        <div className='w-dvw h-dvh flex flex-col items-center pt-[5%] bg-[#FFF5E1]'>
            <p className='text-4xl font-bold'>Our Partners</p>
            <div className='flex h-full w-full'>
                <div className='w-[50%] h-full border border-gray-400 flex items-center justify-center'>
                    Info about partner Companies in general
                </div>
                <div className='w-[50%] h-full border border-gray-400 flex items-center justify-center'>
                    Logos Here
                </div>
            </div>
        </div>
    )
}

export default Partners