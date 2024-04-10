import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import profile from './assets/Photo.png';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';
import Facebook from './assets/facebook.svg';
import LinkedIn from './assets/linkedin.svg';
import Instagram from './assets/instagram.svg';
function App() {
  return (
    <>
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-bold text-xl'>Priyanshu Portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-4'>
                <li>
                  <a href='#projects' className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
                </li>
                <li>
                  <a href='#technologies' className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
                </li>
                <li>
                  <a href='#aboutme' className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className='container m-auto px-4 pt-12 sm:py-32 flex
          flex-col sm:flex-row gap-6'>
            <div>
              <h1 className='font-bold text-4xl'>Hello,I'm Priyanshu,</h1>
              <h1 className='font-bold text-4xl mt-1 gradiant-text running-text'>Web Developer.</h1>
              <p>I craft websites! I take designs and turn them into user-friendly interfaces using code.  It's like building puzzles with logic, where the end result entertains and informs.</p>
            </div>
            <div className='relative'>
              <img src={profile} className='relative z-10 w-[520px] m-auto sm:w-[520px]' />
            </div>
          </div>
        </section>
        <section id='projects'>
          <div className='container m-auto px-4 sm:py-12 '>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex flex-col sm:flex-row gap-10 mt-11'>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={project1} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>Pistachios store landing page</h3>
                <p className='text-gray-400 text-sm mt-2'>Responsive HTML/CSS layout for online Pistachios store.</p>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={project2} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>Food Ordering website</h3>
                <p className='text-gray-400 text-sm mt-2'>Delicious food ordering website with React for the frontend, Node.js for the backend, and Firebase to manage the data!</p>
              </div>
              <div className='border border-gray-500 rounded-md p-5 flex-1'>
                <img src={project3} className='w-full h-auto' />
                <h3 className='text-2xl font-semibold mt-8'>Hostel Managment System</h3>
                <p className='text-gray-400 text-sm mt-2'>I streamlined my university's hostel operations by building a web-based hostel management system!</p>
              </div>

            </div>

          </div>
        </section>
        <section className='py-10' id='technologies'>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Technologies</h2>
            <div className='mt-14'>
              <div>
                <div className='felx justify-between items-center'>
                  <h2 className='font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'>
                </span>
              </div>
              <div className='mt-8'>
                <div className='felx justify-between items-center'>
                  <h2 className='font-semibold'>CSS</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'>
                </span>
              </div>
              <div className='mt-8'>
                <div className='felx justify-between items-center'>
                  <h2 className='font-semibold'>Javascript</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'>
                </span>
              </div>
              <div className='mt-8'>
                <div className='felx justify-between items-center'>
                  <h2 className='font-semibold'>React</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'>
                </span>
              </div>
              <div className='mt-8'>
                <div className='felx justify-between items-center'>
                  <h2 className='font-semibold'>Python</h2>
                  <p className='text-gray-500'>Advanced</p>
                </div>
                <span className='w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md'>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container m-auto px-4 py-14'>
            <h2 className='text-2xl font-semibold'>Additional Technologies and Skills</h2>
            <div className='flex flex-col sm:flex-row
            gap-4 sm:gap-20 mt-12 w-[80%]'>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>GitHub</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Team work</p>
              </div>
              <div>
                <p className='font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5'>Quick learing</p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-8' id='aboutme'>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>About me</h2>
            <div className='mt-12 relative before:absolute before:top-0 before:left-4 before:bottom-0 before:w-1 before:bg-white'>
              <div className='ml-10'>
                <p>This is Priyanshu Jethanandani, a third-year computer engineering student at Ganpat University.  While pursuing my bachelor's degree, I've actively participated in over 5 hackathons, honing my ability to think creatively and collaborate in fast-paced environments.</p>
              </div>
              <div className=' ml-10 pt-10'>
                <p> My passion for technology extends to website development, and I'm constantly looking for ways to improve user experiences through code.
                </p>
              </div>
              <div className='ml-10 pt-10'>
                <p>Beyond traditional engineering, I'm particularly enthusiastic about Artificial Intelligence (AI) and its potential to revolutionize various fields.  I'm actively seeking opportunities to learn and contribute in this exciting domain.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='container m-auto flex justify-between px-4 py-6'>
          <div>
            <p className='text-gray-300 text-sm'>Copy right @ 2024</p>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>
                <a><img src={Facebook} className='w-5'/></a>
              </li>
              <li>
                <a><img src={LinkedIn} className='w-5'/></a>
              </li>
              <li>
                <a><img src={Instagram} className='w-5'/></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
