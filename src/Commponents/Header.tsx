import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import linkedin from '../assets/Socials/linkedin.png'
import github from '../assets/Socials/github.png'
import medium from '../assets/Socials/medium.png'
import email from '../assets/Socials/email.png'
import close from '../assets/close.svg'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

type Props = {}

function Header({ }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <header className='flex h-[10vh] sticky top-0 flex-row bg-drbgclr text-drfgclr  z-50 shadow-md '>
      <div className='flex flex-1 items-center flex-row '>
        <Image src={logo} alt={"logo"} className='h-[60px] w-[60px] m-1 ml-2' />&nbsp;

        {/* <h1 className='text-[24px]'> | Souravpreet Singh </h1> */}

      </div>
      
      <div

        className='hidden sm:flex flex-row items-center justify-between space-x-5'>
        <a href='https://github.com/sourav-thind' target='_blank' className='group flex flex-row rounded-3xl border border-transparent hover:border-drfgclr duration-500 ease-in-out p-2'>
          <Image src={github} alt={"github"} className='h-6 w-6 bg-transparent' />
          <p className='hidden group-hover:block my-auto m-2 hover:delay-1000 hover:duration-1000 hover:ease-in-out'>Github</p>
        </a>

        <a href='https://www.linkedin.com/in/sourav-thind/' target='_blank' className='group flex flex-row rounded-3xl border border-transparent   hover:border-drfgclr duration-500 ease-in-out p-2'>

          <Image src={linkedin} alt={"linkedin"} className='h-6 w-6  bg-transparent' />

          <p className='hidden group-hover:block my-auto m-2 '>LinkedIn</p>
        </a>


        <a href='https://medium.com/@souravthind07it' target='_blank' className='group flex flex-row rounded-3xl border border-transparent   hover:border-drfgclr duration-500 ease-in-out p-2'>
          <Image src={medium} alt={"medium"} className='h-6 w-6 ' />
          <p className='hidden group-hover:block my-auto m-2 '>Medium Blog</p>
        </a>

        <a href='#contact' className='group flex flex-row rounded-3xl border border-transparent   hover:border-drfgclr duration-500 ease-in-out p-2'>
          <Image src={email} alt={"email"} className='h-6 w-7' />
          <p className='hidden group-hover:block my-auto m-2'>Let&apos;s get in Touch</p>
        </a>


      </div>
      

      <div className='sm:hidden flex flex-1  justify-end items-center  z-50'>
        <Image src={!toggle ? menu : close} alt={"menu"} className='h-[28px] w-[28px] object-contain cursor-pointer mr-3' onClick={() => { setToggle(!toggle) }} />

        <div className={`${!toggle ? 'hidden' : 'flex'} z-50`}>
          <div className='flex flex-col gap-1 p-6 bg-gradient-to-br from-black to-gray-900 absolute top-16 right-0 mx-1 min-w-[140px] z-50 rounded-xl'>
            <div className='flex flex-row group'>
              <SocialIcon className='' url='https://github.com/sourav-thind' target='_blank' fgColor='#d9ebe3' bgColor='transparent' />
              <p className='my-auto group-target:'>Github</p>
            </div>

            <div className='flex flex-row'>
              <SocialIcon className='' url='https://www.linkedin.com/in/sourav-thind/' target='_blank' fgColor='#d9ebe3' bgColor='transparent' />
              <p className='my-auto'>LinkedIn</p>
            </div>
            <div className='flex flex-row'>
              <SocialIcon className='' url='https://medium.com/@souravthind07it' target='_blank' fgColor='#d9ebe3' bgColor='transparent' />
              <p className='my-auto'>Medium Blog</p>
            </div>
            <div className='flex flex-row'>
              <SocialIcon className='cursor-pointer' url='#contact' network='email'   fgColor='#d9ebe3' bgColor='transparent' />
              <p className='my-auto'>Let&apos;s get in Touch</p>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header