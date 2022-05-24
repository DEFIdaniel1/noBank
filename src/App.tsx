import "./App.scss";

import Header from "./components/layout/Header";
import Services from "./components/layout/Services";
import Testimonials from "./components/layout/Testimonials";
import Highlights from "./components/layout/Highlights";
import HowItWorks from "./components/layout/HowItWorks";
import Calculator from "./components/layout/Calculator";

function App() {
  return (
    <div>
      <Header />
      <Highlights />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Calculator />
    </div>
  );
}

export default App;