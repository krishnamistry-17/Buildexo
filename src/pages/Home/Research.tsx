import { pr1, pr2, section } from "../../assets/images";
import { projectText, ResearchText } from "../../constance/Text";
import { budget, next, prev } from "../../assets/svgs";
import Button from "../../components/Button";
import SliderMenu from "../../components/SliderMenu";
import useWindowWidth from "../../hooks/useWindowWidth";

const Research = ({ id }: { id: string }) => {
  const width = useWindowWidth();

  const visibleCount = width > 1180 ? 3 : width > 768 ? 2 : 1;

  return (
    <div id={id}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] 
      md:pb-[135px] pb-[50px] md:mx-20"
      >
        {ResearchText.map((item, index) => {
          const lgReverse = Math.floor(index / 1) % 2 === 1;

          return (
            <div
              key={item.number}
              className={`flex flex-col gap-[10px] items-center 
            ${lgReverse ? "lg:flex-col-reverse" : "flex-col"}`}
            >
              {lgReverse ? (
                <div className="flex flex-col gap-[10px] items-center sm:px-0 px-[10px]">
                  {" "}
                  <p className="text-[26px] font-exo-bold text-black-blacktertiary line-height-[33.8px]">
                    {item.title}
                  </p>
                  <p className="text-[16px] font-exo-regular text-gray-graytext text-center line-height-[28px]">
                    {item.description}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-[10px] items-center sm:px-0 px-[10px]">
                  <p className="text-[26px] font-exo-bold text-black-blacktertiary line-height-[33.8px]">
                    {item.title}
                  </p>
                  <p className="text-[16px] font-exo-regular text-gray-graytext text-center line-height-[28px]">
                    {item.description}
                  </p>
                </div>
              )}
              <img
                src={item.icon}
                alt={item.title}
                className="object-cover drop-shadow-md"
              />
              <div>
                <p className="text-[60px] font-exo-extrabold text-gray-graynumber line-height-[60px]">
                  {item.number}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        {/* Background section image  */}
        <div className="hidden md:block">
          <img src={section} alt="section" className="w-full" />
        </div>

        {/* Cards wrapper */}
        <div
          className="
      flex flex-col
      md:flex-row 
      gap-[16px] lg:gap-[39px]
      w-full
     sm:px-[30px] xl:px-[143px]
      items-center
      justify-center
      mx-auto
      mt-[20px]
      md:-mt-[150px]
    "
        >
          <SliderMenu
            items={projectText}
            prevIcon={prev}
            nextIcon={next}
            arrowClassName="absolute z-10 top-1/2 "
            visibleCount={visibleCount}
            renderItem={(item) => (
              <div className="flex flex-col relative px-2" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-t-[10px] w-full"
                />

                {/* Content */}
                <div className="bg-gray-graynumber rounded-b-[10px]">
                  {/* Location badge */}
                  <div
                    className="
                    flex items-center gap-[10px]
                    bg-orange
                    px-[12px] py-[10px]
                    rounded-full
                    -mt-[20px]
                    mx-[10px]
                    lg:mx-[35px]
                    "
                  >
                    <img src={item.icon} alt={item.title} />
                    <p className="text-[12px] lg:text-[15px] font-exo-regular text-secondary">
                      {item.location}
                    </p>
                  </div>

                  {/* Title */}
                  <p
                    className="
                    text-[18px] sm:text-[20px] lg:text-[25px]
                    font-exo-bold
                    text-black-blacksecondary
                    leading-[32px]
                    px-[12px] md:pl-[45px]
                    pt-[12px] pb-[24px]
                    "
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto max-w-[1220px] w-full mt-[50px] gap-[40px]">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Text */}
          <div className="w-full md:w-[50%] bg-gray-lightgray rounded-tl-[10px] rounded-bl-[10px] flex-1 flex items-center">
            <p className="text-[16px] font-exo-regular text-gray-gray px-[20px] md:px-[50px] py-[30px] md:py-[98px]">
              Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
              eiusmod tempor
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-[50%] flex-1 relative sm:px-0 px-[10px]">
            <img
              src={pr1}
              alt="pr1"
              className="w-full h-full object-cover lg:rounded-tr-[10px] lg:rounded-br-[10px]"
            />

            <div className="absolute bottom-5 left-5">
              <div className="bg-secondary w-[220px] rounded-full flex items-center gap-[10px] py-[17px] px-[23px]">
                <div className="flex items-center gap-[10px]">
                  <img src={budget} alt="budget" />
                  <p className="text-[15px] font-exo-extrabold text-black-blacksecondary">
                    Budget:
                  </p>
                </div>
                <p className="text-[15px] font-exo-regular text-black-blacksecondary">
                  $12 million
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col-reverse md:flex-row w-full">
          {/* Image */}
          <div className="w-full md:w-[50%] flex-1 relative sm:px-0 px-[10px]">
            <img
              src={pr2}
              alt="pr2"
              className="w-full h-full object-cover lg:rounded-tl-[10px] lg:rounded-bl-[10px]"
            />

            <div className="absolute bottom-5 left-5">
              <div className="bg-secondary w-[220px] rounded-full flex items-center gap-[10px] py-[17px] px-[23px]">
                <div className="flex items-center gap-[10px]">
                  <img src={budget} alt="budget" />
                  <p className="text-[15px] font-exo-extrabold text-black-blacksecondary">
                    Budget:
                  </p>
                </div>
                <p className="text-[15px] font-exo-regular text-black-blacksecondary">
                  $12 million
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[50%] bg-gray-lightgray rounded-tr-[10px] rounded-br-[10px] flex-1 flex items-center">
            <p className="text-[16px] font-exo-regular text-gray-gray px-[20px] md:px-[50px] py-[30px] md:py-[98px]">
              Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[65px]">
        <Button
          children="More Explore"
          onClick={() => {}}
          className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[30px] text-[15px]"
          type="button"
        />
      </div>
    </div>
  );
};

export default Research;
