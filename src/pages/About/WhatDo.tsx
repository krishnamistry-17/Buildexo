import { do1, do2, do3, whatdo } from "../../assets/images";
import Button from "../../components/Button";
import { WhatDoText } from "../../constance/Text";

const WhatDo = () => {
  return (
    <>
      <section className=" relative w-full overflow-hidden">
        <img
          src={whatdo}
          alt="whatdo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className=" relative z-10 flex items-center justify-center mx-auto w-full max-w-[1240px]  lg:py-[120px] py-[50px]">
          <div className="lg:flex md:flex-row flex-col-reverse ">
            <div className="flex flex-col lg:flex-1 items-center">
              <div
                className="relative 
    w-[260px] h-[300px] 
    sm:w-[340px] sm:h-[400px] 
    lg:w-[420px] lg:h-[480px]"
              >
                {/* Image 1 keep z-10*/}
                <img
                  src={do1}
                  alt="do1"
                  className="absolute 
        top-0 left-1/2 -translate-x-1/2
        sm:left-10 sm:translate-x-0
        w-[200px] sm:w-[300px] lg:w-[350px]
        rounded-[30px] z-10"
                />

                {/* Image 2 keep z-20*/}
                <img
                  src={do2}
                  alt="do2"
                  className="absolute 
        bottom-10 left-0
        sm:bottom-[21px]
        w-[180px] sm:w-[260px]
        rounded-[30px] z-20"
                />

                {/* Image 3 z-30 */}
                <img
                  src={do3}
                  alt="do3"
                  className="absolute 
        bottom-[-30px] right-0
        sm:bottom-[-60px] sm:right-[-10px]
        w-[160px] sm:w-[200px]
        rounded-[30px] z-30"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 lg:px-0 px-[20px] lg:pt-0 pt-[50px]">
              <h2 className="md:text-[35px] text-[25px] font-exo-extrabold text-black-blacksecondary">
                {WhatDoText[0].title}
              </h2>
              <p className="md:text-[18px] sm:text-[16px] text-[15px] font-exo-regular text-black-blackpara pb-[30px]">
                {WhatDoText[0].description}
              </p>
              <div className="flex flex-col gap-[10px]">
                {WhatDoText[0].points.map((point, index) => (
                  <>
                    <div
                      key={index + 1}
                      className="flex items-center gap-[10px] pb-[10px]"
                    >
                      <img src={point.icon} alt="listitem" />
                      <p className="sm:text-[17px] text-[15px] font-exo-semibold text-gray-gray">
                        {point[`point${index + 1}` as keyof typeof point]}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              <h2 className="md:text-[35px] text-[25px] font-exo-extrabold text-black-blacksecondary pb-[20px]">
                {WhatDoText[0].subtitle}
              </h2>
              <div className="flex flex-col gap-[10px]">
                {WhatDoText[0].subpoints.map((subpoint, index) => (
                  <>
                    <div
                      key={index + 1}
                      className="flex items-center gap-[10px] pb-[10px]"
                    >
                      <img src={subpoint.icon} alt="listitem" />
                      <p className="sm:text-[17px] text-[15px] font-exo-semibold text-gray-gray">
                        {subpoint[`point${index + 1}` as keyof typeof subpoint]}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              <div className="mt-[30px]">
                <Button
                  children="More Explore"
                  onClick={() => {}}
                  className="bg-orange uppercase text-secondary font-exo-bold text-[15px] px-[24px] py-[18px] rounded-[4px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatDo;
