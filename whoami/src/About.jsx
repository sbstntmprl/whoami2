import React from 'react'
import project from './assets/project.jpg'

function About() {
  return (
    <section className='h-auto flex flex-col items-center pl-20'>
      <div className='flex flex-col gap-8 text-center p-10 text-text'>
        <h1 className='sm:text-2xl md:text-6xl'>WhoAmI</h1>
        <p className='text-justify sm:text-base xl:text-xl'>I am a dedicated computer science student with a passion for full-stack web development, specializing in the MERN stack. My journey in the world of technology began with a profound curiosity about how things work and a desire to create meaningful digital experiences. From my very first line of code, I was captivated by the potential of technology to transform ideas into functional applications that can improve lives and businesses. Over the years, I have poured countless hours into honing my skills in both front-end and back-end development. This dedication has equipped me with the expertise to design and build dynamic web applications that not only look visually stunning but also perform seamlessly under various conditions. I find immense satisfaction in solving intricate problems, optimizing performance, and crafting user-centric solutions that go beyond aesthetics, ensuring a smooth and engaging experience for users.</p>
        <h1 className='sm:text-2xl md:text-6xl'>Education</h1>
        
        <div className='flex flex-wrap gap-10 w-auto justify-center'>
          <div className='flex gap-20 justify-center'>
            <div className='bg-secondary text-background flex gap-5 p-10 rounded-xl w-auto'>
              <img className='rounded-xl w-80' src={project} alt="" />
          
              <div className='flex flex-col items-start gap-2 w-96'>
                <p>2021-2025</p>
                <h2 className='text-3xl'>Polytechnic University of the Philippines </h2>
                <p>BS Computer Science</p>
                <p>4x President's Lister </p>
          
                <div className='flex flex-wrap justify-center gap-5'>
                  <p className="skills">OOP</p>
                  <p className="skills">Data Structures</p>
                  <p className="skills">Analysis of Algorithms</p>
                  <p className="skills">Logic Design</p>
                  <p className="skills">Database Management</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex flex-wrap gap-20 justify-center'>
            <div className='bg-secondary text-background flex gap-5 p-10 rounded-xl w-auto'>
              <img className='rounded-xl w-80' src={project} alt="" />
          
              <div className='flex flex-col items-start gap-2 w-96'>
                <p>2021-2025</p>
                <h2 className='text-3xl'>Polytechnic University of the Philippines </h2>
                <p>BS Computer Science</p>
                <p>4x President's Lister </p>
          
                <div className='flex flex-wrap justify-center gap-5'>
                  <p className="skills">OOP</p>
                  <p className="skills">Data Structures</p>
                  <p className="skills">Analysis of Algorithms</p>
                  <p className="skills">Logic Design</p>
                  <p className="skills">Database Management</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-20 justify-center'>
            <div className='bg-secondary text-background flex gap-5 p-10 rounded-xl w-auto'>
              <img className='rounded-xl w-80' src={project} alt="" />
          
              <div className='flex flex-col items-start gap-2 w-96'>
                <p>2021-2025</p>
                <h2 className='text-3xl'>Polytechnic University of the Philippines </h2>
                <p>BS Computer Science</p>
                <p>4x President's Lister </p>
          
                <div className='flex flex-wrap justify-center gap-5'>
                  <p className="skills">OOP</p>
                  <p className="skills">Data Structures</p>
                  <p className="skills">Analysis of Algorithms</p>
                  <p className="skills">Logic Design</p>
                  <p className="skills">Database Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About