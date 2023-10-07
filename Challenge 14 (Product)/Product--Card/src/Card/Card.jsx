
import './Card.css'

 export default function Card(){

    return(

        <section className='main-container'>
            <div className="main-container__all">
                <img src="image-product-desktop.jpg" alt="" className='main-container__image' />
                <img src="image-product-mobile.jpg" alt="" className='main-container__image--mobile' />
            <div className="main-container-description">
                <h5 className='faded-text faded-text-family'>P E R F U M E</h5>
                <h1 className='mt-one main-container-description__heading--first'>Gabrielle</h1>
                <h1 className='main-container-description__heading--first'>Essence Eau</h1>
                <h1 className='main-container-description__heading--first'> De Parfum</h1>
                <p className='mt-one faded-text faded-text-family font-d'>A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <section className='price mt-one'>
                <p className='bold-price'>$149.99</p>
                <p className='small-price faded-text'>$169.90</p>
                </section>
                <section className=' mt-one'>
                    <button className='add'><img src="icon-cart.svg" alt="" /><p className='faded-text-family btn-text'>Add to Cart</p></button>
                </section>
            </div>
            </div>
        </section>
        


    )

}


