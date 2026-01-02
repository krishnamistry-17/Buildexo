import { Suspense, lazy } from "react";
import Button from "../../components/Button";
import Herosection from "../../components/HeroSection";
import { PortfolioText } from "../../constance/Text";
import LoaderComponent from "../../components/Loader";
const PortfolioTabs = lazy(() => import("./PortfolioTabs"));
const Portfolio = () => {
  return (
    <>
      <Herosection currentPage="Portfolio" previousPage="Home" />
      <div>
        {PortfolioText.map((item, index) => (
          <div
            className="lg:flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-[100px] mx-auto max-w-[1240px] xl:px-0 px-[20px]"
            key={index}
          >
            <div className="flex flex-col">
              <p className="text-[18px] font-exo-regular text-orange flex items-center gap-[10px]">
                <span>
                  {" "}
                  <img src={item.image} alt={item.title} />
                </span>
                {item.title}
              </p>

              <h1 className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px] font-exo-bold text-black-blacktertiary xl:pl-2 ">
                {item.heading}
              </h1>
            </div>
            <div>
              <p className="text-[16px] font-exo-regular text-gray-graytext text-justify  max-w-[480px]">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" justify-center items-center w-full flex lg:mt-0 mt-[30px]">
        <Suspense fallback={<LoaderComponent />}>
          <PortfolioTabs />
        </Suspense>
      </div>
      <div className="flex justify-center items-center">
        <Button
          children="Load More"
          onClick={() => {}}
          className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[4px] text-[15px]"
          type="button"
        />
      </div>
    </>
  );
};

export default Portfolio;
