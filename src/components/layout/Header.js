import "./Header.scss";
import logo from "../../images/logo2.png";
import Button from "../UI/Button";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo-box">
        <img src={logo} alt="nature tours logo" className="header__logo" />
      </div>
      <div className="header__hero-box">
        <h1>
          <span className="header__main-heading">Nature Tours</span>
          <span className="header__sub-heading">
            Experience the Natural Wonders of the World
          </span>
        </h1>
        <Button link="#" className="header__btn-animate">
          View Tours
        </Button>
      </div>
    </section>
  );
};

export default Header;
