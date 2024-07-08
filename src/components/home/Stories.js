import img8 from "../../assets/img/nat-8.jpg";
import img9 from "../../assets/img/nat-9.jpg";
import videoMp4 from "../../assets/img/video.mp4";
import videoWebm from "../../assets/img/video.webm";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
        </video>
      </div>
      <div className="u-center-text u-mb-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={img8} alt="person of tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-mb-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              nulla delectus odit magni? Incidunt laborum, qui porro vel aliquam
              accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. nulla delectus odit magni? Incidunt laborum, qui porro vel
              aliquam accusantium. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <img src={img9} alt="person of tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-mb-small">
              Wow! my life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              nulla delectus odit magni? Incidunt laborum, qui porro vel aliquam
              accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. nulla delectus odit magni? Incidunt laborum, qui porro vel
              aliquam accusantium. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-mt-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
