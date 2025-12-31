import { faq1, faq2 } from "../../assets/images";
import Contact from "../../components/Contact";
import Faq from "../../components/Faq";
import Herosection from "../../components/HeroSection";
import { FaqDetail } from "../../constance/Text";

const FaqSection = () => {
  return (
    <>
      <Herosection currentPage="FAQ'S" previousPage="Home" />
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1240px] xl:px-0 px-[20px] w-full">
        <div className="lg:flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-[100px] mx-auto max-w-[1240px] xl:px-0 px-[20px]">
          <div className="flex flex-col">
            <p className="text-[18px] font-exo-regular text-orange flex items-center gap-[10px]">
              <span>
                {" "}
                <img src={FaqDetail.image} alt={FaqDetail.title} />
              </span>
              {FaqDetail.title}
            </p>

            <h1 className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px] font-exo-bold text-black-blacktertiary xl:pl-2 ">
              {FaqDetail.heading}
            </h1>
          </div>
          <div>
            <p className="text-[16px] font-exo-regular text-gray-graytext text-justify  max-w-[480px]">
              {FaqDetail.para}
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[70px]  xl:px-0 px-[20px]">
          <div
            className="relative md:mt-0 mt-[30px]
    w-[260px] h-[300px] 
    sm:w-[340px] sm:h-[400px] 
    lg:w-[420px] lg:h-[480px]"
          >
            {/* Image 1 */}
            <img
              src={faq2}
              alt="faq2"
              className="absolute 
        top-0 left-1/2 -translate-x-1/2
        sm:left-10 sm:translate-x-0
        w-[200px] sm:w-[300px] lg:w-[350px]
        rounded-[30px] z-10"
            />

            {/* Image 2 */}
            <img
              src={faq1}
              alt="faq1"
              className="absolute 
        bottom-10 left-0
        sm:bottom-[21px]
        w-[180px] sm:w-[260px]
        rounded-[30px] z-20"
            />
          </div>
          <div className="xl:w-[60%] w-full">
            <Faq />
          </div>
        </div>

        <div className="w-full">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default FaqSection;
