import { scicon, whitearrow } from "../../assets/svgs";
import { BuildingText } from "../../constance/Text";

const Building = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={scicon} alt="scicon" />
        <p className="text-[18px] font-exo-regular text-orange pt-[3px]">
          Great Experience in building
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] xl:pt-[179px] pt-[50px]
       mx-auto max-w-[1240px] xl:px-0 px-[20px]"
      >
        {BuildingText.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center bg-secondary shadow-sm 
         border-2 border-dashed border-gray-grayborder 
         rounded-b-[80px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[175px] h-[195px] object-cover"
            />

            <h2 className="text-[25px] font-exo-bold text-black-blacksecondary pt-[17px]">
              {item.title}
            </h2>

            <p
              className="text-[16px] font-exo-regular text-gray-graytext pt-[19.5px]
             pb-[50px] px-[30px] max-w-[280px] text-center"
            >
              {item.para}
            </p>

            <div className="bg-black-primary rounded-t-full py-[14px] px-[80px] mb-[30px]">
              <img src={whitearrow} alt="whitearrow" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-[50px] px-[16px]">
        <div
          className="
      flex flex-col sm:flex-row
      items-stretch sm:items-center
      border-2 border-dashed border-gray-grayborder
      rounded-xl sm:rounded-r-full
      overflow-hidden
      
    "
        >
          <p
            className="
        text-center sm:text-left
        md:text-[15px] text-[13px]
        font-exo-regular text-orange
        py-[14px] px-[20px]
      "
          >
            Offeromg High Quality Construction Solutions
          </p>

          <button
            className="
        md:text-[15px] text-[13px]
        font-semibold bg-orange text-secondary
        py-[14px] px-[24px]
        sm:rounded-r-full
        rounded-b-xl sm:rounded-b-none
        cursor-pointer
        w-full sm:w-auto
      "
          >
            Build Your Dream Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Building;
