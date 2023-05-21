import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import Image from 'next/image'
import Hero from './Hero'
type Props = {}

function Header({}: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <header className='flex h-[10vh] sticky top-0 flex-row bg-drbgclr text-drfgclr z-10'>
    <div className='flex flex-1 items-center flex-row '>
      <Image src={logo} alt={"logo"} className='h-[60px] w-[60px] m-1 ml-2'/>&nbsp;
      
    <h1 className='text-[24px]'> | Souravpreet Singh </h1>
 
    </div>

    <div className='hidden sm:flex flex-row items-center justify-between'>
<div className='group flex flex-row rounded-3xl border border-transparent   hover:border-drfgclr duration-500 ease-in-out'>
<SocialIcon className='' url='https://github.com/sourav-thind' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='hidden group-hover:block my-auto m-2 hover:delay-1000 hover:duration-1000 hover:ease-in-out'>Github</p>
</div>
<div className='group flex flex-row rounded-3xl border border-transparent   hover:border-drfgclr duration-500 ease-in-out'>
<SocialIcon className='' url='https://www.linkedin.com/in/sourav-thind/' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='hidden group-hover:block my-auto m-2 '>LinkedIn</p>
</div>
<div className='group flex flex-row rounded-3xl border border-transparent   hover:border-drfgclr duration-500 ease-in-out'>
<SocialIcon className='' url='https://www.instagram.com/thind_sourav/' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='hidden group-hover:block my-auto m-2 '>Instagram</p>
</div>
<div className='group flex flex-row rounded-3xl border border-transparent   hover:border-drfgclr duration-500 ease-in-out'>
<SocialIcon className='cursor-pointer' network='email' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='hidden group-hover:block my-auto m-2 '>Let's get in Touch</p>
</div>

</div>


<div className='sm:hidden flex flex-1 justify-end items-center'>
<Image src={!toggle?menu:close} alt={"menu"} className='h-[28px] w-[28px] object-contain cursor-pointer mr-3' onClick={()=>{setToggle(!toggle)}}/>

<div className={`${!toggle?'hidden':'flex'} `}>
<div className='flex flex-col gap-1 p-6 bg-gradient-to-br from-black to-gray-900 absolute top-10 right-0 mx-1 min-w-[140px] z-10 rounded-xl'>
<div className='flex flex-row'>
<SocialIcon className='' url='https://github.com/sourav-thind' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='my-auto'>Github</p>
</div>
<div  className='flex flex-row'>
<SocialIcon className='' url='https://www.linkedin.com/in/sourav-thind/' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='my-auto'>LinkedIn</p>
</div>
<div  className='flex flex-row'>
<SocialIcon className='' url='https://www.instagram.com/thind_sourav/' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='my-auto'>Instagram</p>
</div>
<div  className='flex flex-row'>
<SocialIcon className='cursor-pointer' network='email' target='_blank' fgColor='#d9ebe3' bgColor='transparent'/>
<p className='my-auto'>Let's get in Touch</p>
</div>
</div>
</div>
</div>

</header>
  )
}

export default Header