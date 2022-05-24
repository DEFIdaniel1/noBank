import "./Highlights.scss";
import Card from "../UI/Card";

const Highlights = () => {
  return (
    <Card className="white">
      <div className="services">
        <div className="services__box">
          <div className="services__box-heading">$125M+</div>
          <div className="services__box-icon1" />
          <h4>Total Value Locked</h4>
        </div>
        <div className="services__box">
          <div className="services__box-heading">14,000+</div>
          <div className="services__box-icon2" />
          <h4>Monthly Active Users</h4>
        </div>
        <div className="services__box">
          <div className="services__box-heading">Decentralized</div>
          <div className="services__box-icon3" />
          <h4>Smart Contracts You Can Trust</h4>
        </div>
      </div>
    </Card>
  );
};

export default Highlights;
