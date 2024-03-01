import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import daisy from "./assets/landing-daisy.png";
import resume from "./assets/resume.pdf";

function Landing() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
        gsap.to(image, {
            rotation: 360, // Rotate 360 degrees
            transformOrigin: "center", // Rotate around the center
            duration: 4, // Duration in seconds
            ease: "power2.out", // Ease function for smooth animation
            repeat: -1, // Repeat the animation indefinitely
        });
    }
  }, []);

  return (
    <section className='sm:h-auto xl:h-screen flex flex-col items-center pl-20 xl:flex-row '>

      <div className='flex flex-col gap-8 text-center p-10 text-text'>
        <h2 className='text-5xl sm:text-3xl md:text-5xl'>Hi there I'm</h2>
        <h1 className='text-8xl sm:text-5xl md:text-8xl xl:text-8xl'>Sebastian</h1>
        <h2 className='text-5xl sm:text-3xl md:text-5xl'>Computer Science Student</h2>
        <h2 className='text-5xl sm:text-3xl md:text-5xl'>Full-Stack Web Developer</h2>
        <p className='text-justify sm:text-base xl:text-xl'>I'm a passionate Computer Science student and Full-Stack Web Developer, with a keen interest in creating innovative and user-friendly digital solutions. I thrive on the challenges of modern web development, constantly pushing the boundaries of my skills to deliver exceptional results.</p>

        <div className='sm:text-base flex flex-col justify-center gap-6  font-bold md:flex-row md:text-xl xl:text-2xl'>
          <a className="a-btn" target="_blank" href={resume}>Download my CV</a>
          <a className="a-btn" href="https://github.com/pyto-p">GitHub</a>
          <a className="a-btn" href="https://www.linkedin.com/in/sbstntmprl/">LinkedIn</a>
      </div>
      </div>

      <div className='sm:h-0 md:self-center md:h-auto xl:pr-10'>
        <img ref={imageRef} className='sm:invisible md:visible md:w-96 md:h-96 lg:w-96 max-w-none xl:w-[533px] xl:h-[533px]' src={daisy} alt="A big daisy." />
      </div>
    </section>
  )
}

export default Landing