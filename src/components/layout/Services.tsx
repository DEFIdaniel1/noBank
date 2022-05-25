import Card from "../UI/Card";
import "./Services.scss";
import Button from "../UI/Button";

const Services = () => {
  return (
    <Card className="dark-blue">
      <h1 id="service-link">Our Services</h1>
      <div className="services">
        <div className="services__box">
          <h2>Crypto Staking</h2>
          <div className="services__box-highlight">19% APY</div>
          <h4>
            Stake your crypto-currencies with us and get an annualized yield up
            to 19%!
          </h4>
          <Button link="/#calculator" className="services__box btn-pink">
            Stake now
          </Button>
        </div>
        <div className="services__box">
          <h2>Borrowing</h2>
          <div className="services__box-highlight">2% APY</div>
          <h4>
            Need to use your crypto as collateral for a loan in USD? We have you
            covered!
          </h4>
          <Button link="/#calculator" className="services__box btn-pink">
            Borrow now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Services;
