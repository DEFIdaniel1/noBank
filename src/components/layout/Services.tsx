import Card from '../UI/Card'
import './Services.scss'

const Services = () => {
  return (
    <Card className="dark-blue">
      <div className="services">
        <div className="services__box">
          <h3>One</h3>
          <h4>Image</h4>
        </div>
        <div className="services__box">
          <h3>Two</h3>
          <h4>Image</h4>
        </div>
      </div>
    </Card>
  );
}

export default Services