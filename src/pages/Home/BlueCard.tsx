import { blue1, blue2, bluecardbg, fc1, link } from "../../assets/images";
import { callblack } from "../../assets/svgs";
import Button from "../../components/Button";

const BlueCard = () => {
  return (
    <section className="relative w-full">
      <img
        src={bluecardbg}
        alt="bluecard"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className=" relative z-10">
        <div className="flex items-center gap-[10px] justify-center ">
          <div className=" relative">
            <img
              src={blue1}
              alt="blue1"
              className=" shadow-lg shadow-blue-light"
            />
            <div className="absolute top-0 right-0 sm:block hidden">
              <img src={link} alt="link" />
            </div>
            <div
              className="bg-blue-darkblue rounded-l-[80px] rounded-r-[80px] p-[25px] md:block hidden
             absolute lg:bottom-3 lg:-left-1/2  "
            >
              <div className="flex items-center gap-[10px]">
                <div className=" relative">
                  <img src={fc1} alt="fc1" />
                  <div className="absolute top-3 right-[-26px]">
                    <img
                      src={callblack}
                      alt="callblack"
                      className="bg-secondary p-[14px] rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col pl-[20px]">
                  <p className="text-[13px] font-exo-medium text-orange uppercase">
                    Call Title
                  </p>
                  <p className="text-[25px] font-exo-extrabold text-secondary">
                    Phone Number
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-[100px]">
            <img
              src={blue2}
              alt="blue2"
              className="shadow-lg shadow-blue-light"
            />
            <p className="md:text-[18px] text-[14px] font-exo-regular text-secondary text-center max-w-[334px] mt-[23px]">
              For over 80 years, We have been the trusted name in heating, air
              conditioning and plumbing businesses.
            </p>
            <Button
              children="More Explore"
              onClick={() => {}}
              className="bg-orange md:px-8 md:py-4 px-4 py-2 font-exo-bold  uppercase text-secondary rounded-[4px] md:text-[15px] text-[12px] mt-[33px]"
              type="button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueCard;
