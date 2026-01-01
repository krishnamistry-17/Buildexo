import { useState } from "react";
import { blackcard, card1, card2 } from "../../assets/images";
import { sc, symbol } from "../../assets/svgs";
import Button from "../../components/Button";

const BlackCard = () => {
  const number = [2001, 2002, 2003, 2004];
  const [selectedNumber, setSelectedNumber] = useState(number[0]);
  return (
    <section className="relative  w-full ">
      {/* BACKGROUND IMAGE */}
      <img
        src={blackcard}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* HERO CONTENT */}
      <div
        className="relative z-10 lg:flex flex-col-reverse md:flex-row gap-[40px]
         h-full items-center py-[70px] lg:justify-between md:justify-center
       xl:pl-[100px] lg:pl-[80px] md:pl-[60px] sm:pl-[40px] pl-[20px]"
      >
        <div className=" flex flex-col gap-[10px]">
          <div className=" flex items-center gap-[10px]">
            <img src={sc} alt="sc" />
            <p className="text-[16px] font-exo-regular text-orange uppercase">
              BIGGER, BETTER, FASTER
            </p>
          </div>
          <div className="max-w-[439px] text-secondary pt-[12px]">
            <h1
              className="xl:text-[53px] lg:text-[40px] md:text-[30px] text-[20px] 
            font-exo-bold md:leading-[63.8px] leading-[40px]"
            >
              Got Many Awards Since 2001-2004
            </h1>

            <p
              className="xl:text-[85px] lg:text-[70px] md:text-[50px] text-[30px]
             font-exo-extrabold  text-transparent stroke-text"
            >
              {selectedNumber}
            </p>

            <p className="mt-3 text-[16px] font-exo-regular text-gray-graytext">
              Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
              eiusmod tempor
            </p>

            <Button
              children="More Explore"
              onClick={() => {}}
              className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[4px] text-[15px] mt-[40px]"
              type="button"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[22px] pr-[80px] lg:mt-0 mt-[30px]">
          <div className=" md:flex justify-end gap-[50px]">
            <img
              src={card1}
              alt="card1"
              className=" md:rounded-l-[200px] md:rounded-r-[200px] 
              w-[380px] h-[231px]"
            />
            <div className=" flex flex-col gap-[10px] pt-2">
              {number.map((item) => (
                <button
                  key={item}
                  className={`text-[30px] font-exo-extrabold cursor-pointer flex items-center gap-[10px]
                    ${
                      selectedNumber === item
                        ? "text-orange flex items-center gap-[8px]"
                        : "text-transparent stroke-text"
                    }
                    `}
                  onClick={() => setSelectedNumber(item)}
                >
                  {item}
                  {selectedNumber === item && <img src={symbol} alt="symbol" />}
                </button>
              ))}
            </div>
          </div>
          <img
            src={card2}
            alt="card2"
            className=" md:rounded-l-[200px] md:rounded-r-[200px] w-[550px] h-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BlackCard;
