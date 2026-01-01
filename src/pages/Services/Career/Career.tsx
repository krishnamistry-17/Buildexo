import { useNavigate } from "react-router-dom";
import Herosection from "../../../components/HeroSection";
import { CareerText } from "../../../constance/Text";

const Career = () => {
  const navigate = useNavigate();
  return (
    <>
      <Herosection currentPage="Career" previousPage="Services" />
      <div className="flex justify-center items-center mx-auto max-w-[1240px]  ">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-[24px]">
          {CareerText?.map((item, index) => {
            return (
              <div
                onClick={() =>
                  navigate(`/services/career/career-details/${item.id}`)
                }
                key={index}
                className="bg-tertiary px-[30px] flex flex-col h-full"
              >
                <div className="flex  justify-between items-center">
                  <div className="flex items-center gap-[20px]">
                    <img src={item.image} alt={item.title} />
                    <p className="lg:text-[26px] text-[20px] font-exo-bold text-black-blacksecondary py-[24px]">
                      {item.title}
                    </p>
                  </div>
                  <p
                    className="lg:text-[15px] text-[12px] font-exo-regular text-orange border border-orange rounded-[5px]
                   sm:px-[15px] px-[10px] py-[9px] lg:block hidden"
                  >
                    {item.time}
                  </p>
                </div>
                <div className="lg:flex flex-col lg:flex-row justify-between items-center pt-[20px]">
                  <div className="flex items-center gap-[9px] ">
                    <img src={item.location.icon} alt={item.location.text} />
                    <p className="text-[16px] font-exo-regular text-gray-gray">
                      {item.location.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px] lg:pt-0 pt-[10px]">
                    <img src={item.date.icon} alt={item.date.text} />
                    <p>{item.date.text}</p>
                  </div>
                  <div className="flex items-center gap-[10px] lg:pt-0 pt-[10px]">
                    <img src={item.price.icon} alt={item.price.text} />
                    <p>{item.price.text}</p>
                  </div>
                </div>
                <div>
                  <p className="sm:text-[18px] text-[16px]  font-exo-regular text-gray-gray py-[23px] ">
                    {item.para}
                  </p>
                </div>
                <div className="mb-[30px] mt-auto flex justify-center lg:justify-start">
                  <button className="bg-orange uppercase text-secondary font-exo-bold text-[15px]  px-[34px] py-[16px] rounded-[4px]">
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Career;
