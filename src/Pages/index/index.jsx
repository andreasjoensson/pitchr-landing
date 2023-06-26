import React from "react";
import About from "../../Components/about/About";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/contact/Contact";
import Counter from "../../Components/counter/Counter";
import Feature from "../../Components/feature/Feature";
import HeroBanner1 from "../../Components/heroBanner/HeroBanner";
import Pricing from "../../Components/pricing/Pricing";
function index() {
  return (
    <div>
      <HeroBanner1 />
      <div className="page-content">
        <Feature />
        <Counter />
        <About />
        <Pricing />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default index;
