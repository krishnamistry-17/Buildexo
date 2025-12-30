import Herosection from "../../components/HeroSection";
import { OurTeamText } from "../../constance/Text";
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();
  return (
    <>
      <Herosection currentPage="Our Team" previousPage="Home" />
      <div className="flex flex-col justify-center items-center mx-auto w-full">
        <img src={OurTeamText.icon} alt="Our Team" />
        <p className="text-[18px] font-exo-regular text-orange pt-[3px]">
          {OurTeamText.title}
        </p>
        <h2 className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px] font-exo-bold text-black-blacksecondary pt-[3px]">
          {OurTeamText.heading}
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]
        mx-auto max-w-[1240px] xl:px-0 px-[20px]"
        >
          {OurTeamText.engineers.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/ourteam/team-detail/${item.id}`)}
              className="cursor-pointer"
            >
              <div className=" aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt="Our Team"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col bg-cream-primary px-6 py-5 max-w-[300px] rounded-bl-[30px]">
                <p className="text-[23px] font-exo-extrabold text-black-blacksecondary">
                  {item.name}
                </p>
                <p className="text-[16px] font-exo-regular text-gray-graytext">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
