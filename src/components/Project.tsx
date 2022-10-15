import aboutImage from '../assets/about2.jpg'

export function Project() {
    return (
        <div className="content-image">
                <a href={aboutImage} className="portfolio-popup">
                  
                    <img src={aboutImage} alt="" />

                    <div className="image-overlay"> </div>

                    <div className="portfolio-caption">
                    
                        <div className="title">
                            <h4 className='text-2xl text-gray-100'>Ignite Lab Design System </h4>
                        </div>

                        <div className="subtitle">
                            <span className='text-2xl text-gray-100' >React </span>
                         </div>

                    </div>
               </a>
        </div>
    )
}