import Herosection from "../../components/HeroSection";
import AboutCompany from "./AboutCompany";
import Building from "./Building";
import WhatDo from "./WhatDo";
import Card from "./Card";

const About = () => {
  return (
    <>
      <Herosection currentPage="About Us" previousPage="Home" />
      <div className="flex flex-col justify-center items-center mx-auto w-full">
        <div>
          <AboutCompany />
        </div>
        <div className="w-full md:pt-[120px] pt-[50px]">
          <WhatDo />
        </div>
        <div className="w-full xl:pt-[145px] pt-[50px]">
          <Building />
        </div>
        <div className=" w-full ">
          <Card />
        </div>
      </div>
    </>
  );
};

export default About;
