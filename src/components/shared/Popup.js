import img1 from "../../assets/img/nat-8.jpg";
import img2 from "../../assets/img/nat-9.jpg";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={img1} alt="tour pic" className="popup__img" />
          <img src={img2} alt="tour pic" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-mb-small">Start booking now</h2>
          <h3 className="heading-tertiary u-mb-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text u-mb-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            alias a, nisi nobis vel minus enim voluptatibus veritatis placeat
            excepturi hic, voluptate maiores rem dignissimos eius pariatur
            aliquid atque asperiores? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatem alias a, nisi nobis vel minus enim
            voluptatibus veritatis placeat excepturi hic, voluptate maiores rem
            dignissimos eius pariatur aliquid atque asperiores?
          </p>
          <a href="#" className="btn btn--primary">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
