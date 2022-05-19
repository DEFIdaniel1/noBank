import './Highlights.scss'
import Card from '../UI/Card';

import lock from '../../images/lock.svg';
import users from "../../images/users.svg";
import decentralized from "../../images/decentralized.png";

const Highlights = () => {
  return (
    <Card className="white">
      <div className="services">
        <div className="services__box">
          <h3>Total Value Locked</h3>
          <img src={lock} alt="lock icon" className="services__box-icon" />
          <h4>$125M+</h4>
        </div>
        <div className="services__box">
          <h3>Active Users</h3>
          <img src={users} alt="user icon" className="services__box-icon" />
          <h4>14,000+</h4>
        </div>
        <div className="services__box">
          <h3>Decentralized</h3>
          <img src={decentralized} alt="decentralized icon" className="services__box-icon" />
          <h4>Smart Contracts You Can Trust</h4>
        </div>
      </div>
    </Card>
  );
}

export default Highlights