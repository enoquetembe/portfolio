import './styles/global.css';
import logo from './assets/photo.jpg'

export function App() {


  return (
    <main className='bg-gray-900 h-screen w-screen  '>
      <header>
        <div className='mx-auto max-w-[1200px] w-full bg-gray-800 px-4 py-4'>
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

        <div className='mx-auto  flex justify-between max-w-[1200px] w-full bg-gray-800 px-10 py-10 mt-10 '>
          <div>
            <span className='text-[26px] uppercase text-gray-100'>I am Enoque Tembe</span>

            <h2 className='text-[70px] text-violet-900 font-bold capitalize mt-8'>Web Developer</h2>

            <button className='bg-violet-900 py-3 px-6 rounded text-gray-100 font-semibold mt-8' >Contact Me</button>
         </div>

         <div className='max-w-[300px]  '>
          <img src={logo} className='w-2/3 rounded-[50%] ring-4 ring-violet-900'  />
      
         </div>

      
        </div>


      
      </header>

      <section>

      </section>
      
    </main>
  )
}


