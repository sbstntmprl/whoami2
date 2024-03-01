import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <section className='h-screen flex flex-col items-center pl-20'>
      <div className='flex flex-col gap-8 text-center p-10 text-text'>
        <h1 className='sm:text-2xl md:text-6xl text-left'>Skills</h1>
        <p className='text-justify sm:text-base xl:text-xl'>With expertise in technologies like MongoDB, Express.js, React, and Node.js, I am well-equipped to tackle the challenges of modern web development. I thrive on problem-solving and continuous learning, always eager to stay updated with the latest trends and advancements in the field. My goal is to leverage my skills to craft innovative solutions and contribute to the ever-evolving landscape of digital technology. </p>
        <h1 className='sm:text-2xl md:text-6xl text-left'>MERN Stack</h1>
        <p className='text-justify sm:text-base xl:text-xl'>In my journey as a full-stack web developer, my proficiency with the MERN (MongoDB, Express.js, React, Node.js) stack has been a defining aspect of my skill set. I have hands-on experience in designing and implementing complex web applications that seamlessly integrate front-end and back-end functionalities. On the front-end, I excel in crafting user-friendly, responsive, and visually appealing interfaces using React, leveraging its component-based architecture and state management. On the back-end, I have a deep understanding of Node.js and Express.js, allowing me to build robust server-side applications and RESTful APIs with ease. My database expertise extends to MongoDB, where I efficiently design schemas and manage data for optimal performance. This combination of skills empowers me to create dynamic and efficient web solutions that meet both user and business needs, while adhering to best practices and industry standards. </p>
      </div>
      <div className='flex gap-20 sm:flex-col lg:flex-row'>
        <div className='flex flex-col items-center gap-5'>
          <SiMongodb className=' text-[#3d6891] sm:w-20 sm:h-20 md:w-36 md:h-36' />
          <h2 className='text-text text-4xl'>MongoDB</h2>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <SiExpress className='text-[#3d6891] sm:w-20 sm:h-20 md:w-36 md:h-36' />
          <h2 className='text-text text-4xl'>ExpressJS</h2>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <RiReactjsFill className='text-[#3d6891] sm:w-20 sm:h-20 md:w-36 md:h-36' />
          <h2 className='text-text text-4xl'>ReactJS</h2>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <FaNodeJs className='text-[#3d6891] sm:w-20 sm:h-20 md:w-36 md:h-36' />
          <h2 className='text-text text-4xl'>NodeJS</h2>
        </div>
      </div>
    </section>
  )
}

export default Skills