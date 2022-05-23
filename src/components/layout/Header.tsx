import "./Header.scss";
import logo from "../../images/logo2.png";
import Button from "../UI/Button";

const Header = () => {
  return (
    <section className="header">
      <a href="#" className="header__logo-box">
        <img src={logo} alt="nobank logo" className="header__logo" />
        <h1>NoBank</h1>
      </a>
      <div className="header__hero-box">
        <h1>
          <span className="header__main-heading">DEFI</span>
          <span className="header__sub-heading">
            Freedom from Banks
          </span>
        </h1>
        <Button link="#" className="btn-animate">
          View Services
        </Button>
      </div>
    </section>
  );
};

export default Header;
