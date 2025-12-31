import Button from "../../../components/Button";
import { PricingPlanText } from "../../../constance/Text";

const Plan = () => {
  const items = PricingPlanText.plans;
  const filterItems = items.filter((item) => item.id % 2 === 0);
  console.log(filterItems);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={PricingPlanText.icon} alt="Pricing Plan" />
        <p className="text-[18px] font-exo-regular text-orange pt-[3px]">
          {PricingPlanText.title}
        </p>
        <h2
          className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px]
         pt-[5px] font-exo-bold text-black-blacksecondary "
        >
          {PricingPlanText.heading}
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]
            xl:px-0 px-[20px]
            `}
        >
          {PricingPlanText.plans.map((item, index) => {
            const isOdd = index % 2 === 0;

            return (
              <div
                key={index}
                className={`border border-black-blackquinary rounded-[15px]
                    flex flex-col h-full shadow-md
                    ${isOdd ? "bg-secondary " : "bg-black-blackquinary"}
                
                    `}
              >
                <div
                  className={`flex flex-col items-center justify-center  mx-[40px]
                rounded-b-full max-w-[300px]
           ${isOdd ? " bg-black-blackquinary" : " bg-orange"}`}
                >
                  <h3 className="text-[28px] font-exo-semibold text-secondary pt-[17px] px-[100px]">
                    {item.title}
                  </h3>
                  <p
                    className={`xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px]
                   font-exo-extrabold ${
                     !isOdd ? " text-secondary" : " text-orange"
                   } pt-[14px]
                   `}
                  >
                    {item.price}
                  </p>
                  <p className="text-[18px] font-exo-medium text-secondary pt-[3px] pb-[35px]">
                    {item.duration}
                  </p>
                </div>
                <div
                  className={`flex flex-col justify-center items-center text-center mt-[17px] mx-[16px]
                    rounded-tl-[120px] flex-1
                    ${isOdd ? " bg-black-blackquinary" : " bg-orange"}
                    `}
                >
                  <p className="text-[18px] font-exo-medium text-secondary pt-[3px] pb-[35px]">
                    {PricingPlanText.features.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className=" pt-[44px] px-[50px] w-full"
                        >
                          <p
                            className="sm:text-[17px] text-[15px] font-exo-regular text-secondary
                        border-b border-secondary/20 sm:pb-[20px] pb-[10px]
                          "
                          >
                            {item[`list${index + 1}` as keyof typeof item]}
                          </p>
                        </div>
                      );
                    })}
                  </p>
                  <div className="mt-auto mb-[54px]">
                    <Button
                      children="Get Started"
                      onClick={() => {}}
                      className={`
                                 font-exo-bold text-[16px] uppercase py-[19.5px] sm:px-[69px] px-[50px] rounded-[5px]
                                ${
                                  isOdd
                                    ? " border border-orange text-orange bg-transparent"
                                    : " bg-secondary text-orange"
                                }
                                `}
                      type="button"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Plan;
