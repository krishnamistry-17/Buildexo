import HomeHeroSection from "./HomeHeroSection";
import CompanyTab from "./CompanyTab";
import Card from "./Card";
import Slider from "./Slider";
import Research from "./Research";
import Engineer from "./Engineer";
import BlackCard from "./BlackCard";
import Card1 from "./Card1";
import RenovationCard from "./RenovationCard";
import BlueCard from "./BlueCard";

const Home = () => {
  return (
    <>
      <div>
        <HomeHeroSection />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto w-full">
        <div className=" -mt-16 md:-mt-[60px]">
          <CompanyTab />
        </div>
        <div className=" mt-[10px]">
          <Card />
        </div>
        <div className=" mt-[50px]">
          <Slider />
        </div>
        <div className=" w-full">
          <BlueCard />
        </div>
        <div className=" mt-[50px]  ">
          <Research />
        </div>
        <div className="mt-[150px] bg-blue-lightblue w-full ">
          <Engineer />
        </div>
        <div className=" -mt-[60px]">
          <BlackCard />
        </div>
        <div>
          <Card1 />
        </div>
        <div className="w-full">
          <RenovationCard />
        </div>
      </div>
    </>
  );
};

export default Home;
