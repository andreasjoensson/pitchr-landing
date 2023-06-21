import React from "react";
import About2 from "../../Components/about/About2";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/contact/Contact";
import Faq from "../../Components/faq/Faq";
import Feature from "../../Components/feature2/Feature";
import HeroBanner2 from "../../Components/heroBanner/HeroBanner2";
import Pricing from "../../Components/pricing/Pricing";
import FeatureGrid from "../../Components/featuregrid/FeatureGrid";

function index2() {
  return (
    <div className="page-wrapper">
      <HeroBanner2 />
      <div className="page-content">
        <Feature />
        <About2 />
        <FeatureGrid />
        <Pricing />
        <Faq />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default index2;
