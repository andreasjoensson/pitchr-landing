import React from "react";
import About from "../../Components/about/About3";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/contact/Contact";
import Feature from "../../Components/feature3/Feature";
import HeroBanner3 from "../../Components/heroBanner/HeroBanner3";
import Portfolio from "../../Components/portfolio/Protfolio";
import Pricing from "../../Components/pricing2/Pricing";

function index3() {
  return (
    <div>
      <HeroBanner3 />
      <div className="page-content">
        <Feature />
        <About />
        <Portfolio />
        <Pricing />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default index3;
