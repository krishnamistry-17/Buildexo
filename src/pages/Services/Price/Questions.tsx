import Button from "../../../components/Button";
import { PricingDetailText } from "../../../constance/Text";
import Faq from "../../../components/Faq";

const Questions = () => {
  return (
    <div className="mt-[120px] bg-tertiary w-full ">
      <div
        className="xl:flex flex-col xl:flex-row justify-center items-center mx-auto
       max-w-[1240px] xl:py-[110px]"
      >
        <div
          className="flex flex-col flex-1 
         pl-[45px] pr-[15px] xl:pt-[115px] pt-[50px]   "
        >
          <div className="md:flex hidden items-center gap-[30px]">
            <img src={PricingDetailText.img1} alt="left" />
            <img src={PricingDetailText.img2} alt="right" />
          </div>
          <p className="text-[18px] font-exo-regular text-black-blackpara pt-[23px] max-w-[464px]">
            {PricingDetailText.para}
          </p>
          <div className="flex flex-col gap-[10px] pt-[20px] pb-[40px]">
            {PricingDetailText["points"].map((item, index) => {
              console.log(item);
              return (
                <div
                  key={index + 1}
                  className="flex items-center gap-[10px] pb-[10px]"
                >
                  <img src={item.icon} alt="listitem" />
                  <p className="sm:text-[17px] text-[15px] font-exo-semibold text-gray-gray">
                    {item[`point${index + 1}` as keyof typeof item]}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <Button
              children="More Explore"
              onClick={() => {}}
              className="bg-orange uppercase text-secondary font-exo-bold
               sm:text-[15px] text-[12px] sm:px-[24px] px-[16px] py-[18px] rounded-[4px]"
              type="button"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="xl:pl-[41px] xl:pr-[15px] xl:pt-[15px] p-[20px]">
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
