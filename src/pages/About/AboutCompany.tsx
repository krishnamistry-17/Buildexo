import { aboutcompany } from "../../assets/images";
import { call, scicon } from "../../assets/svgs";
import Button from "../../components/Button";
import { AboutCompanyText } from "../../constance/Text";
import Tabs from "./Tabs";

const AboutCompany = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-[65px] lg:flex-row flex-col-reverse xl:px-0 sm:px-[20px]">
        <div className="flex flex-col gap-5 xl:w-[60%] md:px-0 px-[20px]">
          <div className="flex items-center gap-2">
            <img src={scicon} alt="sc" />
            <p className="text-[16px] font-exo-regular text-orange uppercase">
              {AboutCompanyText.title}
            </p>
          </div>
          <h1
            className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px] font-exo-bold text-black-primary
           line-height-[60px] max-w-[683px]"
          >
            {AboutCompanyText.heading}
          </h1>
          <p className="text-[18px] font-exo-regular text-black-primary  line-height-[28px] max-w-[683px]">
            {AboutCompanyText.description}
          </p>
          <Tabs />
          <div className="flex md:flex-row flex-col md:gap-0 gap-[20px]">
            <Button
              children="learn more"
              onClick={() => {}}
              className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[4px] text-[15px]"
              type="button"
            />
            <div className="flex items-center gap-2 ml-[40px]">
              <img
                src={call}
                alt="call"
                className="border border-orange p-[16px] rounded-full bg-secondary"
              />
              <div className="flex flex-col pl-[20px]">
                <p className="text-[15px] font-exo-regular text-gray-graysecondary">
                  {AboutCompanyText.mobileTitle}
                </p>
                <p className="text-[24px] font-exo-bold text-black-blacksecondary">
                  {AboutCompanyText.mobileNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:w-[40%]">
          <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] bg-orange/10 rounded-[20px] drop-shadow-lg  relative sm:px-0 px-[20px]">
            <div className="w-full h-full flex items-center justify-center absolute inset-0 -translate-y-6 -translate-x-6">
              <img
                src={aboutcompany}
                alt="aboutcompany"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
