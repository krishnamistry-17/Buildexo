import { card1, sidecard } from "../../assets/images";
import { Card1Text } from "../../constance/Text";
import { check } from "../../assets/svgs";
import Button from "../../components/Button";

const Card1 = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center w-full px-[30px]">
        <div className="w-[620px] lg:block hidden">
          <img
            src={card1}
            alt="card1"
            className=" shadow-md bg-white w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col pt-auto gap-[10px] md:pl-[40px] pl-[20px] md:pr-[10px] pr-[5px] w-full">
          <div>
            {Card1Text.map((item) => (
              <div key={item.number}>
                <p
                  className="text-[18px] font-exo-regular text-gray-gray line-height-[28px] 
                 max-w-[562px] pb-[23px] xl:pt-0 lg:pt-[30px] md:pt-0 pt-[50px]"
                >
                  {item.description}
                </p>
                <div className="flex justify-between items-center md:flex-row flex-col">
                  <div className="flex flex-col pr-[30px] w-full">
                    <p className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px] font-exo-extrabold text-orange line-height-[55px]">
                      {item.number}
                    </p>
                    <p className="text-[17px] font-exo-bold text-black-blackquaternary   uppercase">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px] w-full md:pt-0 pt-[20px]">
                    {item.points.map((point) => (
                      <>
                        <div className="flex items-center gap-[10px] w-full">
                          <img src={check} alt="check" />
                          <p className="text-[20px] font-exo-semibold text-black-blacksecondary ">
                            {point.point1}
                          </p>
                        </div>
                        <div className="flex items-center gap-[10px] w-full">
                          <img src={check} alt="check" />
                          <p className="text-[20px] font-exo-semibold text-black-blacksecondary ">
                            {point.point2}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div>
              <Button
                children="More Explore"
                onClick={() => {}}
                className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[30px] text-[15px] mt-[30px]"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:flex hidden justify-end items-center w-[50%] max-w-[1240px]">
        <img src={sidecard} alt="sidecard" />
      </div>
    </div>
  );
};

export default Card1;
