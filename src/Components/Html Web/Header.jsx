import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';


function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex h-[10vh] sticky top-0 flex-row bg-drbgclr text-drfgclr z-50 shadow-md">
      <div className="flex flex-1 items-center flex-row">
        <img src="/assets/logo.png" alt="logo" className="h-[50px] w-[50px] m-1 ml-2" />
        &nbsp;
      </div>
      <div className="hidden sm:flex flex-row items-center justify-between space-x-5">
        <a
          href="https://github.com/sourav-thind"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row rounded-3xl border border-transparent hover:border-drfgclr duration-500 ease-in-out p-2"
        >
          <img src='/assets/Socials/github.png' alt="github" className="h-6 w-6 bg-transparent" />
          <p className="hidden group-hover:block my-auto m-2 hover:delay-1000 hover:duration-1000 hover:ease-in-out">
            Github
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/sourav-thind/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row rounded-3xl border border-transparent hover:border-drfgclr duration-500 ease-in-out p-2"
        >
          <img
            src='/assets/Socials/linkedin.png'
            alt="linkedin"
            className="h-6 w-6 bg-transparent"
          />
          <p className="hidden group-hover:block my-auto m-2">LinkedIn</p>
        </a>

        {/* Uncomment if needed
        <a
          href="https://medium.com/@souravthind07it"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row rounded-3xl border border-transparent hover:border-drfgclr duration-500 ease-in-out p-2"
        >
          <img src={medium} alt="medium" className="h-6 w-6" />
          <p className="hidden group-hover:block my-auto m-2">Medium Blog</p>
        </a>
        */}

        <a
          href="#contact"
          className="group flex flex-row rounded-3xl border border-transparent hover:border-drfgclr duration-500 ease-in-out p-2"
        >
          <img src='/assets/Socials/email.png' alt="email" className="h-6 w-7" />
          <p className="hidden group-hover:block my-auto m-2">
            Let&apos;s get in Touch
          </p>
        </a>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center z-50">
        <img
          src={!toggle ? '/assets/menu.svg' : '/assets/close.svg'}
          alt="menu"
          className="h-[28px] w-[28px] object-contain cursor-pointer mr-3"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? 'hidden' : 'flex'} z-50`}>
          <div className="flex flex-col gap-1 p-6 bg-gradient-to-br from-black to-gray-900 absolute top-16 right-0 mx-1 min-w-[140px] z-50 rounded-xl">
            <div className="flex flex-row group">
              <SocialIcon
                url="https://github.com/sourav-thind"
                target="_blank"
                fgColor="#d9ebe3"
                bgColor="transparent"
              />
              <p className="my-auto">Github</p>
            </div>

            <div className="flex flex-row">
              <SocialIcon
                url="https://www.linkedin.com/in/sourav-thind/"
                target="_blank"
                fgColor="#d9ebe3"
                bgColor="transparent"
              />
              <p className="my-auto">LinkedIn</p>
            </div>

            {/* Uncomment if needed
            <div className="flex flex-row">
              <SocialIcon
                url="https://medium.com/@souravthind07it"
                target="_blank"
                fgColor="#d9ebe3"
                bgColor="transparent"
              />
              <p className="my-auto">Medium Blog</p>
            </div>
            */}

            <div className="flex flex-row">
              <SocialIcon
                className="cursor-pointer"
                url="#contact"
                network="email"
                fgColor="#d9ebe3"
                bgColor="transparent"
              />
              <p className="my-auto">Let&apos;s get in Touch</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
