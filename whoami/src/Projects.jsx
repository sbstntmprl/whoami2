import React from 'react'
import project from './assets/project.jpg'

function Projects() {
  return (
    <section className='h-auto flex flex-col items-center pl-20'>
      <div className='flex flex-col gap-8 text-center p-10 text-text'>
        <h1 className='sm:text-2xl md:text-6xl'>Projects</h1>
        
        <div className='flex flex-wrap gap-20 justify-center'>
          <div className='bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl w-96'>
            <img className='rounded-xl' src={project} alt="" />
            <h2 className='text-3xl'>Project1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, totam?</p>
            
            <div className='flex justify-center gap-5'>
              <p className="skills">Python</p>
              <p className="skills">Java</p>
            </div>

            <div className='flex justify-center gap-5'>
              <a className='underline text-lg' href="#">Source Code</a>
              <a className='underline text-lg' href="#">Live Demo</a>
            </div>
          </div>
          
          <div className='bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl w-96'>
            <img className='rounded-xl' src={project} alt="" />
            <h2 className='text-3xl'>Project1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, totam?</p>
            
            <div className='flex justify-center gap-5'>
              <p className="skills">Python</p>
              <p className="skills">Java</p>
            </div>

            <div className='flex justify-center gap-5'>
              <a className='underline text-lg' href="#">Source Code</a>
              <a className='underline text-lg' href="#">Live Demo</a>
            </div>
          </div>
          
          <div className='bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl w-96'>
            <img className='rounded-xl' src={project} alt="" />
            <h2 className='text-3xl'>Project1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, totam?</p>
            
            <div className='flex justify-center gap-5'>
              <p className="skills">Python</p>
              <p className="skills">Java</p>
            </div>

            <div className='flex justify-center gap-5'>
              <a className='underline text-lg' href="#">Source Code</a>
              <a className='underline text-lg' href="#">Live Demo</a>
            </div>
          </div>

          <div className='bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl w-96'>
            <img className='rounded-xl' src={project} alt="" />
            <h2 className='text-3xl'>Project1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, totam?</p>
            
            <div className='flex justify-center gap-5'>
              <p className="skills">Python</p>
              <p className="skills">Java</p>
            </div>

            <div className='flex justify-center gap-5'>
              <a className='underline text-lg' href="#">Source Code</a>
              <a className='underline text-lg' href="#">Live Demo</a>
            </div>
          </div>

          <div className='bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl w-96'>
            <img className='rounded-xl' src={project} alt="" />
            <h2 className='text-3xl'>Project1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, totam?</p>
            
            <div className='flex justify-center gap-5'>
              <p className="skills">Python</p>
              <p className="skills">Java</p>
            </div>

            <div className='flex justify-center gap-5'>
              <a className='underline text-lg' href="#">Source Code</a>
              <a className='underline text-lg' href="#">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects