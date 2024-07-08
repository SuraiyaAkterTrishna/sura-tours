import logo_1x from "../../assets/img/logo-green-1x.png";
import logo_2x from "../../assets/img/logo-green-2x.png";
import logo_small_1x from "../../assets/img/logo-green-small-1x.png";
import logo_small_2x from "../../assets/img/logo-green-small-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source srcSet={`${logo_small_1x} 1x, ${logo_small_2x} 2x`} media="(max-width: 37.5em)" />
          <img srcSet={`${logo_1x} 1x, ${logo_2x} 2x`} alt="logo full" src={logo_1x} />
        </picture>
        
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">Company</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Contact us</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Careers</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Privacy policy</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
            <p className="footer__copyright">
            Built by <a href="#" className="footer__link">Md. Kamrujjaman</a> for his personal skill development. Copyright &copy; by Md. Kamrujjaman. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Md. Kamrujjaman, is of course highly appreciated!
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
