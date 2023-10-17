import './Hero.css'
import 'animate.css';


export default function Main(){


return(
<div className="container">
    <div className="main-container-row animate__animated animate__fadeInRight animate__slow">
        <div className="main-container-row__first-col">
            <section className='heading'>
            <h1>Make</h1>
            <h1>remote work</h1>
            </section>
            <section className='main-container-p mt-two p-gray'>
                <p>Get your team in sync, no matter your location.</p>
                <p> Streamline processes, create team rituals, and</p>
                <p>watch productivity soar.</p>
            </section>
            <section className='learn-more'>
                <button className='learn-more__button'><p>Learn more</p></button>
            </section>
            <section className='logos mt-five'>
                <ul className='logo-list'>
                    <li><img src="client-databiz.svg" alt="" /></li>
                    <li><img src="client-audiophile.svg" alt="" /></li>
                    <li><img src="client-meet.svg" alt="" /></li>
                    <li><img src="client-maker.svg" alt="" /></li>
                </ul>
            </section>
        </div>
        <div className="main-container-row__second-col">
            <img src="image-hero-desktop.png" alt="" className='image-1' />
            <img src="image-hero-mobile.png" alt="" className='image-2' />
        </div>
       </div>
       </div>


)

}