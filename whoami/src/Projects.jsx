import React from 'react'
import caloraide from './assets/caloraide.png'
import gamelift from './assets/gamelift.png'
import meddispense from './assets/meddispense.png'
import noterex from './assets/noterex.png'
import tetris from './assets/tetris.png'


function Projects() {
  return (
    <section className='h-auto flex flex-col items-center pl-20'>
      <div className='flex flex-col gap-8 text-center p-10 text-text'>
        <h1 className='sm:text-4xl md:text-6xl'>Projects</h1>
        
        <div className='flex flex-wrap sm:gap-5 lg:gap-10 xl:gap-20 justify-center'>
          <div className='sm:w-64 md:w-96 bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl '>
            <img className='rounded-xl' src={noterex} alt="" />
            <h2 className='sm:text-2xl md:text-4xl'>Noterex</h2>
            <p className='sm:text-sm md:text-base'>A multi-platform note-taking app built with Kivy, offering a seamless user experience and intuitive UI for efficient organization and retrieval of notes.</p>
            
            <div className='flex justify-center gap-5 sm:text-sm md:text-base'>
              <p className="skills">Python</p>
            </div>

            <div className='flex justify-center gap-5 sm:text-sm md:text-lg'>
              <a className='underline' href="https://github.com/pyto-p/NoteRex">Source Code</a>
            </div>
          </div>
          
          <div className='sm:w-64 md:w-96 bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl '>
            <img className='rounded-xl' src={caloraide} alt="" />
            <h2 className='sm:text-2xl md:text-4xl'>Caloraide</h2>
            <p className='sm:text-sm md:text-base'>A user-friendly calorie tracking app with essential features, including a goal calculator, weight mode options, calorie and progress trackers, and visual data representation, aimed at simplifying the process of achieving health and weight goals.</p>
            
            <div className='flex justify-center gap-5 sm:text-sm md:text-base'>
              <p className="skills">Python</p>
            </div>

            <div className='flex justify-center gap-5 sm:text-sm md:text-lg'>
              <a className='underline' href="https://github.com/pyto-p/CalorAide">Source Code</a>
            </div>
          </div>
          
          <div className='sm:w-64 md:w-96 bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl '>
            <img className='rounded-xl' src={tetris} alt="" />
            <h2 className='sm:text-2xl md:text-4xl'>Tetris</h2>
            <p className='sm:text-sm md:text-base'>A classic game of Tetris built with HTML CSS JS.</p>
            
            <div className='flex justify-center gap-5 sm:text-sm md:text-base'>
              <p className="skills">HTML</p>
              <p className="skills">CSS</p>
              <p className="skills">JS</p>
            </div>

            <div className='flex justify-center gap-5 sm:text-sm md:text-lg'>
              <a className='underline' href="https://github.com/pyto-p/pyto-tetris">Source Code</a>
              <a className='underline' href="https://pyto-p.github.io/pyto-tetris/">Live Demo</a>
            </div>
          </div>

          <div className='sm:w-64 md:w-96 bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl '>
            <img className='rounded-xl' src={meddispense} alt="" />
            <h2 className='sm:text-2xl md:text-4xl'>MedDispense</h2>
            <p className='sm:text-sm md:text-base'>A web app simulation that emulates a vending machine for medicine, providing a convenient and interactive way to dispense prescription and over-the-counter medications.</p>
            
            <div className='flex flex-wrap justify-center gap-5 sm:text-sm md:text-base'>
              <p className="skills">MongoDB</p>
              <p className="skills">ExpressJS</p>
              <p className="skills">ReactJS</p>
              <p className="skills">NodeJS</p>
            </div>

            <div className='flex justify-center gap-5 sm:text-sm md:text-lg'>
              <a className='underline' href="https://github.com/pyto-p/MedDispense">Source Code</a>
            </div>
          </div>

          <div className='sm:w-64 md:w-96 bg-secondary text-background flex flex-col gap-5 p-10 rounded-xl '>
            <img className='rounded-xl' src={gamelift} alt="" />
            <h2 className='sm:text-2xl md:text-4xl'>Gamelift</h2>
            <p className='sm:text-sm md:text-base'>A web app simulation that serves as a comprehensive game search engine, offering access to thousands of titles across various platforms and genres.</p>
            
            <div className='flex justify-center gap-5 sm:text-sm md:text-base'>
              <p className="skills">ExpressJS</p>
            </div>

            <div className='flex justify-center gap-5 sm:text-sm md:text-lg'>
              <a className='underline' href="https://gitlab.com/uplift-code-camp/students/batch-18/temporal-sebastian/projects/-/tree/p3-react-app/p3-react-app?ref_type=heads">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects