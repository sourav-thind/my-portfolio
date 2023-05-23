import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='bg-drbgclr relative  flex mx-auto justify-center h-[90vh] '>
            <div className='flex flex-col items-center space-y-10 mt-6'>
                <h1 className='tracking-[20px] text-2xl md:text-3xl text-drgry uppercase font-semibold '>About</h1>
                <div className='flex'>
                    {/* <div className='w-[400px]'>
                        <video autoPlay loop    muted className='bg-trprt'>
                            <source src="/vid_about.mp4" type="video/mp4" />  
                        </video>
                    </div> */}
                    <div >
                     <p>
                         hey i am a web developer based in canada 
                        </p>  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About