import { tromhend } from "../../assets/images";
import { check, sign } from "../../assets/svgs";
import { HeroText } from "../../constance/Text";

const Card = () => {
  return (
    <>
      <div className=" md:flex justify-center items-center px-[10px]">
        <div className="lg:w-[30%]">
          <img src={tromhend} alt="tromhend" />
        </div>
        <div className=" flex flex-col lg:w-[50%] ">
          <div className="pb-[38px]">
            <p className=" lg:text-[18px] text-[16px] font-exo-regular text-gray-gray px-[10px] line-height-[28px]">
              {HeroText.para}
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 pb-[55px]">
            <div className=" flex flex-col gap-[10px] md:pb-0 pb-[10px]">
              <div className=" flex items-center gap-[10px]">
                <img src={check} alt="check" />
                <p className=" lg:text-[20px] text-[16px] font-exo-semibold   text-black-blacksecondary">
                  {HeroText.headings.head1}
                </p>
              </div>
              <div className=" flex items-center gap-[10px]">
                <img src={check} alt="check" />
                <p className=" lg:text-[20px] text-[16px] font-exo-semibold text-black-blacksecondary">
                  {HeroText.headings.head2}
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[10px]">
              <div className=" flex items-center gap-[10px]">
                <img src={check} alt="check" />
                <p className=" lg:text-[20px] text-[16px] font-exo-semibold text-black-blacksecondary">
                  {HeroText.headings.head3}
                </p>
              </div>
              <div className=" flex items-center gap-[10px]">
                <img src={check} alt="check" />
                <p className=" lg:text-[20px] text-[16px] font-exo-semibold text-black-blacksecondary">
                  {HeroText.headings.head4}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:flex px-[10px]">
            <img src={sign} alt="sign" />
            <div className="flex flex-col pl-[38px]">
              <p className=" text-[25px] font-exo-extrabold text-black-blacksecondary">
                Tom Henders
              </p>
              <p className=" text-[15px] font-exo-medium text-gray-gray">
                CEO of Company
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
