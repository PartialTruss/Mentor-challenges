import "../Hero/Hero.css";

export default function Hero() {
  return (
    <main>
      <div className="main-row">
        <div className="main-container-starter">
          <img src="image-interactive.jpg" alt="" />
        </div>
        <div className="main-container-starter__description">
          <h1 className="heading-font"> The leader in interactive VR </h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <section className="start">
        <div className="start-heading">
          <h1 className="heading-font">OUR CREATION</h1>
        </div>
        <div className="learn-more-btn">
          <button className="learn-more">
            <p>SEE ALL</p>
          </button>
        </div>
      </section>
      <div className="gallery_images">
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              DEEP
              <br />
              EARTH
            </h2>
          </div>
        </figure>
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              NIGHT
              <br />
              ARCADE
            </h2>
          </div>
        </figure>
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              SOCCER
              <br />
              TEAM VR
            </h2>
          </div>
        </figure>
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              THE
              <br />
              GRID
            </h2>
          </div>
        </figure>
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              FROM UP
              <br />
              ABOVE VR
            </h2>
          </div>
        </figure>
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              POCKET
              <br />
              BOREALIS
            </h2>
          </div>
        </figure>
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              THE
              <br />
              CURIOSITY
            </h2>
          </div>
        </figure>
        <figure className="gallery_images_img">
          <div className="gallery_images_mask">
            <h2 className="gallery_images_title">
              MAKE IT
              <br />
              FISHEYE
            </h2>
          </div>
        </figure>
      </div>
      <div className="learn-more-btn-images">
          <button className="learn-more-images">
            <p>SEE ALL</p>
          </button>
        </div>
    </main>
  );
}
