import Herosection from "../components/HeroSection";
import { errpr } from "../assets/images";

const Errorpage = () => {
  return (
    <>
      <Herosection currentPage="404" previousPage="Home" />
      <div
        className="flex flex-col justify-center items-center mx-auto 
      max-w-[500px] px-[20px] w-full"
      >
        <img src={errpr} alt="error" className="w-full h-full object-contain" />
        <p
          className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] text-center
        py-[65px] font-exo-bold text-black-blacksecondary "
        >
          Oops! Page Not found.
        </p>
      </div>
    </>
  );
};

export default Errorpage;
