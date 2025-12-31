import Herosection from "../../../components/HeroSection";
import Plan from "./Plan";
import Questions from "./Questions";

const Pricing = () => {
  return (
    <>
      <Herosection currentPage="Pricing" previousPage="Services" />
      <div className="flex flex-col justify-center items-center mx-auto w-full">
        <Plan />
        <div className="w-full">
          <Questions />
        </div>
      </div>
    </>
  );
};

export default Pricing;
