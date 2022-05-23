import "./Testimonials.scss";

import happyWoman from '../../images/happyWoman.jpeg';
import happyMan from "../../images/happyMan.jpeg";


const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h1>
        Our Users <span className="pink">LOVE</span> NoBank
      </h1>
      <div className="testimonials">
        <figure className="review">
          <blockquote className="review__text">
            Wow, finally a DEFI platform that doesn't run off with your 
            hard-earned crypto. Say no to rugpulls - say yes to NoBank!
          </blockquote>
          <figcaption className="review__user">
            <img
              src={happyWoman}
              alt="happy woman"
              className="review__user-image"
            />
            <div className="review__user-box">
              <p className="review__user-name">Natalie Portman</p>
              <p className="review__user-date">Feb 11, 2022</p>
            </div>
            <div className="review__user-rating">9/10</div>
          </figcaption>
        </figure>
        <figure className="review">
          <blockquote className="review__text">
            I saved so much money that I can finally retire! I didn't understand
            crypto, but now it's all I do. I'm earnin' and burnin'! Sorry grandkids.
          </blockquote>
          <figcaption className="review__user">
            <img
              src={happyMan}
              alt="happy woman"
              className="review__user-image"
            />
            <div className="review__user-box">
              <p className="review__user-name">James Anderson</p>
              <p className="review__user-date">May 4, 2022</p>
            </div>
            <div className="review__user-rating">10/10</div>
          </figcaption>
        </figure>
      </div>
      {/* <div className="testimonial">Testimonial 1</div> */}
    </div>
  );
};

export default Testimonials;
