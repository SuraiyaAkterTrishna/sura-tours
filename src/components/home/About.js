import img1 from "../../assets/img/nat-1.jpg";
import img2 from "../../assets/img/nat-2-large.jpg";
import img3 from "../../assets/img/nat-3-large.jpg";
import img1_large from "../../assets/img/nat-1-large.jpg";
import img2_large from "../../assets/img/nat-2-large.jpg";
import img3_large from "../../assets/img/nat-3-large.jpg";

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-mb-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-mb-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            eius quae illo ea voluptates tenetur non quis expedita error dicta,
            provident molestiae libero sunt sint est cum laborum. Tempora,
            ducimus.
          </p>
          <h3 className="heading-tertiary u-mb-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            eius quae illo ea voluptates tenetur non quis expedita error dicta,
            provident molestiae libero sunt sint est cum laborum. Tempora,
            ducimus.
          </p>
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet={`${img1} 350w, ${img1_large} 1000w`}
              sizes="(max-width: 56.25em) 18vw, (max-width: 37.5em) 27vw, 350px"
              src={img1}
              alt="img 01"
              className="composition__img composition__img--p1"
            />
            <img
              srcSet={`${img2} 350w, ${img2_large} 1000w`}
              sizes="(max-width: 56.25em) 19vw, (max-width: 37.5em) 29vw, 350px"
              src={img2}
              alt="img 02"
              className="composition__img composition__img--p2"
            />
            <img
              srcSet={`${img3} 350w, ${img3_large} 1000w`}
              sizes="(max-width: 56.25em) 17vw, (max-width: 37.5em) 25vw, 350px"
              src={img3}
              alt="img 03"
              className="composition__img composition__img--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
