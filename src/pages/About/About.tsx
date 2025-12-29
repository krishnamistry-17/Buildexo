import Herosection from "../../components/HeroSection";
import AboutCompany from "./AboutCompany";

const About = () => {
  return (
    <>
      <Herosection currentPage="About Us" previousPage="Home" />
      <div className="flex flex-col justify-center items-center mx-auto w-full">
        <div>
          <AboutCompany />
        </div>
      </div>
    </>
  );
};

export default About;
