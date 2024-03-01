import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <section className='bg-secondary h-auto flex flex-col items-center justify-center pl-20 pb-10'>
      <div className='flex flex-col gap-8 text-center p-10 text-text'>
        <h1 className='sm:text-2xl md:text-6xl text-left text-active'>Got a Project? Contact Me!</h1>
      </div>
      <div className='flex gap-8 text-center'>
        <div className='flex gap-4 items-center'>
          <a href="mailto:sbstntmprl@duck.com">
            <IoIosMail className='w-14 h-14 skills'/>
          </a>
          <p className='text-xl text-background'>sbstntmprl@duck.com</p>
        </div>

        <div className='flex gap-4 items-center'>
          <a href="https://www.linkedin.com/in/sbstntmprl/">
            <FaLinkedin className='w-14 h-14 skills'/>
          </a>
          <p className='text-xl text-background'>linkedin.com/in/sbstntmprl</p>
        </div>
        <div className='flex gap-4 items-center'>
          <a href="https://github.com/pyto-p"><FaGithub className='w-14 h-14 skills'/></a>
          <p className='text-xl text-background'>github.com/pyto-p</p>
        </div>
      </div>
    </section>
  )
}

export default Contact