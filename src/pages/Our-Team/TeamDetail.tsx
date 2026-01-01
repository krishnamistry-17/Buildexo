import { useParams } from "react-router-dom";
import { OurTeamText } from "../../constance/Text";
import Herosection from "../../components/HeroSection";
import { teambg } from "../../assets/images";

import Contact from "../../components/Contact";

const TeamDetail = () => {
  const { id } = useParams();
  const engineer = OurTeamText.engineers.find(
    (item) => item.id === Number(id)
  ) || { name: "", designation: "", image: "" };

  return (
    <>
      <Herosection currentPage={engineer?.name} previousPage="Our Team" />

      <div className="flex flex-col justify-center items-center mx-auto w-full max-w-[1240px] ">
        <div className="flex lg:flex-row flex-col lg:gap-[70px]  xl:px-0 px-[20px]">
          <div className=" relative max-w-[500px] ">
            <img
              src={teambg}
              alt="team"
              className="w-full h-full object-cover"
            />
            <div className=" absolute top-0 left-0 w-full h-full">
              <img
                src={engineer.image}
                alt={engineer.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col lg:pt-[89px] pt-[20px]">
            <p className="xl:text-[50px] lg:text-[40px] md:text-[35px] text-[25px] font-exo-bold text-black-blacksecondary">
              {engineer.name}
            </p>
            <p className="text-[15px] font-exo-semibold text-orange pt-[10px]">
              {engineer.designation}
            </p>
            <p className="md:text-[18px] text-[16px] font-exo-regular text-gray-graysecondary py-[33px] max-w-[500px]">
              {OurTeamText.para}
            </p>
            <div>
              {OurTeamText.points.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[125px_1fr]  pb-[10px]"
                >
                  <p className="text-[17px] font-exo-semibold text-black-blacksecondary text-start">
                    {item.title}
                  </p>
                  <p className="text-[15px] font-exo-regular text-gray-graysecondary text-start">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[20px] font-exo-semibold text-black-blacksecondary pt-[30px]">
                {OurTeamText.socialMedia[0].title}
              </p>
              <div className="flex items-center gap-[10px] pt-[20px]">
                {OurTeamText.socialMedia[0].icons.map((icon) => (
                  <img
                    src={icon}
                    alt={icon as string}
                    className="border border-orange rounded-full p-[13px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pt-[60px] pt-[30px] xl:px-[80px] px-[15px]">
          <h2 className="xl:text-[36px] lg:text-[30px] md:text-[25px] text-[20px] font-exo-bold text-black-blacksecondary">
            {OurTeamText.personalInfo[0].title}
          </h2>
          <p className="xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] font-exo-regular text-gray-graysecondary pt-[23px] text-justify">
            {OurTeamText.personalInfo[0].para1}
          </p>
          <p className="xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] font-exo-regular text-gray-graysecondary pt-[26px] text-justify">
            {OurTeamText.personalInfo[0].para2}
          </p>
          <h2 className="xl:text-[36px] lg:text-[30px] md:text-[25px] text-[20px] font-exo-bold text-black-blacksecondary pt-[23px]">
            {OurTeamText.careerGuide[0].title}
          </h2>
          <p className="xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] font-exo-regular text-gray-graysecondary pt-[22px] text-justify">
            {OurTeamText.careerGuide[0].para1}
          </p>
          <p className="xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] font-exo-regular text-gray-graysecondary pt-[26px] text-justify">
            {OurTeamText.careerGuide[0].para2}
          </p>
        </div>
        <div className="mt-[60px] w-full xl:px-[80px] ">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default TeamDetail;
