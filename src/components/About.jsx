import React from 'react'

const About = () => {
    return (
        <div className='w-dvw h-dvh flex flex-col items-center pt-[5%]'>
            <p className='text-4xl font-bold'>About Us</p>
            <div className='flex h-full w-full'>
                <div className='w-[50%] h-full border border-black flex items-center justify-center'>
                    About the company here
                </div>
                <div className='w-[50%] h-full border border-black flex items-center justify-center'>
                    Some graphic here
                </div>
            </div>
        </div>
    )
}

export default About