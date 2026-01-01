import { useParams } from "react-router-dom";
import Herosection from "../../../components/HeroSection";
import { CareerText, JobDetailText } from "../../../constance/Text";
import { check1 } from "../../../assets/svgs";
import JobSummary from "./JobSummary";

const CareerDetails = () => {
  const { id } = useParams();
  const career = CareerText.find((item) => item.id === Number(id)) || {
    title: "",
    image: "",
    time: "",
    location: { icon: "", text: "" },
    date: { icon: "", text: "" },
    price: { icon: "", text: "" },
    para: "",
  };

  return (
    <>
      <Herosection currentPage={career?.title} previousPage="Career" />
      <div className="lg:flex flex-col lg:flex-row gap-[29px] jitems-center mx-auto max-w-[1240px] lg:px-[20px]">
        <div className="bg-tertiary rounded-[10px] w-full  lg:w-[70%]">
          <div className="flex flex-col md:px-[30px] px-[20px] pt-[30px] ">
            <img
              src={JobDetailText.image}
              alt="career"
              className="w-full h-full object-cover"
            />
            <p className="text-[16px] font-exo-regular text-gray-graysecondary pt-[44px] text-justify ">
              {JobDetailText.para1}
            </p>
            <p className="text-[16px] font-exo-regular text-gray-graysecondary pt-[29px] text-justify">
              {JobDetailText.para2}
            </p>
            <section>
              <h2 className="sm:text-[24px] text-[20px] font-exo-bold text-black-blacksecondary pt-[24px]">
                {JobDetailText.title}
              </h2>
              <div className="flex flex-col gap-[10px] pt-[24px]">
                {Object.values(JobDetailText.points).map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <img src={check1} alt="check" />
                    <p className="sm:text-[16px] text-[14px] font-exo-regular text-gray-graysecondary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="sm:text-[24px] text-[20px] font-exo-bold text-black-blacksecondary pt-[24px]">
                {JobDetailText.title1}
              </h2>
              <div className="flex flex-col gap-[10px] pt-[24px]">
                {Object.values(JobDetailText.points1).map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <img src={check1} alt="check" />
                    <p className="sm:text-[16px] text-[14px] font-exo-regular text-gray-graysecondary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="sm:text-[24px] text-[20px] font-exo-bold text-black-blacksecondary pt-[24px]">
                {JobDetailText.title2}
              </h2>
              <div className="flex flex-col gap-[10px] pt-[24px]">
                {Object.values(JobDetailText.points2).map((item) => (
                  <div key={item} className="flex items-center gap-[10px]">
                    <img src={check1} alt="check" />
                    <p className="sm:text-[16px] text-[14px] font-exo-regular text-gray-graysecondary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="sm:text-[24px] text-[20px] font-exo-bold text-black-blacksecondary pt-[24px]">
                {JobDetailText.title3}
              </h2>
              <p className="sm:text-[16px] text-[14px] font-exo-regular text-gray-graysecondary py-[28px]">
                {JobDetailText.salary}
              </p>
            </section>
          </div>
        </div>
        <div className="lg:w-[30%] lg:mx-0 md:mx-[50px] mx-[20px] lg:mt-0 mt-[40px]">
          <JobSummary />
        </div>
      </div>
    </>
  );
};

export default CareerDetails;
