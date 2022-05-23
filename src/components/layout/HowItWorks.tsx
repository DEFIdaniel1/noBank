import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="howItWorks__text">
        <div className="heading">
          <h1>
            Earn in <span className="pink">3 Easy Steps</span>
          </h1>
        </div>
        <div className="body">
          <h2>
            1. Open a <span className="blue">Free Account</span>
          </h2>
          <p>It's as easy as entering your email and metamask account.</p>
          <h2>2. Transfer Your Crypto Assets</h2>
          <p>Get a token back, proving your deposit value.</p>
          <h2>
            3. <span className="blue">Make Money</span>
          </h2>
          <p>Boom. Collect sweet yield on your crypto daily.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
