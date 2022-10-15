import './styles/global.css'
import './styles/style.css';
import introImage from './assets/photo.jpg'
import aboutImage from './assets/about2.jpg'
import {Project} from './components/Project'
/*
import './scripts/contact-form.js'
import './scripts/imagesloaded.pkgd.min.js'
import './scripts/fakeLoader.min.js'
import './scripts/jquery.filterizr.min.js'
import './scripts/jquery.magnific-popup.min.js'
import './scripts/jquery.min.js'
import './scripts/owl.carousel.min.js'
import './scripts/main.js'


import './styles/fakeLoader.css'
import './styles/jquery.magnific-popup.js'
import './styles/owl.carousel.css'
import './styles/owl.theme.default.css'

**/





export function App() {


  return (
    <main className='bg-gray-900  max-w-[1440px] pb-20 pt-11 '>
      <header>
        <div className='mx-auto max-w-[1200px] w-full bg-gray-800 px-10 py-5'>
          <nav className='flex items-center justify-between'>
            <a href="" className='text-2xl text-violet-900 font-bold'>Enoque Tembe </a>

            <ul className='flex gap-3 text-gray-400 font-semibold'>
              <li>
                <a href="">Home</a>
              </li>

              <li>
                <a href="">Project</a>
              </li>

              <li>
                <a href="">Resume</a>
              </li>

              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className='mx-auto  flex justify-between max-w-[1200px] w-full bg-gray-800 px-10 py-12 mt-10 '>
          <div>
            <span className='text-[26px] uppercase text-gray-100'>I am Enoque Tembe</span>

            <h2 className='text-[70px] text-violet-900 font-bold capitalize mt-8'>Web Developer</h2>

            <button className='bg-violet-900 py-3 px-6 rounded text-gray-100 font-semibold mt-8' >Contact Me</button>
         </div>

         <div className='max-w-[300px]  '>
          <img src={introImage} className='w-2/3 rounded-[50%] ring-4 ring-violet-900'  />
      
         </div>

      
        </div>


      
      </header>

      <section className='mx-auto  flex justify-between gap-9 max-w-[1200px] w-full bg-gray-800  mt-10 '>
        <div className='w-[70%] pl-10'>
            <h3 className='text-violet-900 text-xl font-bold  capitalize mt-16'>
                About me
            </h3>

            <h2 className='text-gray-100 text-[40px] font-black mt-12'>
              I am a  Web Developer
            </h2>

            <p className='text-gray-100 leading-9 text-justify mt-10'>
              who wants to learn, grow, share, and 
              develop my skills in the web development field. In my spare 
              time I like to program, play games, listen to music and teach 
              programming logic to many people. Also, I spend time 
              studying, working on small projects, challenges and 
              learning new skills.
              My first contact with programming was in 2020 and since 
              then I've had contact with several programming languages 
              such as Java, PHP, C#, JavaScript, but my focus is now JavaScript.
              I haven't had the opportunity to work in a real company yet, 
              but I've worked on projects with friends and colleagues.
            </p>
        </div>

        <div className='max-w-[50%]  w-[100%] '>
            <img src={aboutImage} className='w-full '  />
        </div>
      </section>


      <section  className='mx-auto max-w-[1200px] w-full bg-gray-800 px-10 py-12  mt-10 '>
        
              <h3 className='text-violet-900 text-xl font-bold capitalize'>
                My portfloio
              </h3>
            
            <div className='grid grid-cols-3 gap-9 mt-12 relative'>
              
              <Project/>

              <Project/>

              <Project/>

              <Project/>

              <Project/>

              <Project/>
             



              


            </div>
            
            
      </section>

    </main>
  )
}


