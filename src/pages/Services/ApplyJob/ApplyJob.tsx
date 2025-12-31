import Herosection from "../../../components/HeroSection";
import JobForm from "../../../components/JobForm";
import { ApplyJobText } from "../../../constance/Text";

const ApplyJob = () => {
  return (
    <>
      <Herosection currentPage="Job Apply" previousPage="Home" />
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1240px] xl:px-0 px-[20px]">
        <img src={ApplyJobText.icon} alt="Apply Job" />
        <p className="text-[18px] font-exo-regular text-orange pt-[3px]">
          {ApplyJobText.title}
        </p>
        <h2
          className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px] 
        font-exo-bold text-black-blacksecondary pt-[3px]"
        >
          {ApplyJobText.heading}
        </h2>
        <p className="text-[18px] font-exo-regular text-gray-graytext text-center md:max-w-[616px] pt-[33px]">
          {ApplyJobText.para}
        </p>
        <div className="pt-[53px] w-full">
          <JobForm />
        </div>
      </div>
    </>
  );
};

export default ApplyJob;
