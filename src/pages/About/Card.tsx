import { card2Text, EnginnerText } from "../../constance/Text";
import Button from "../../components/Button";

const Card = () => {
  return (
    <>
      <div className=" relative w-full bg-gray-graybg">
        <div
          className=" pt-[100px] w-full
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mx-auto max-w-[1240px] xl:px-0 px-[20px]"
        >
          {EnginnerText.map((item) => (
            <div key={item.name} className="flex flex-col ">
              <div className="aspect-[3/3] overflow-hidden bg-white shadow-sm  rounded-t-[100px] relative">
                <div className="absolute inset-0 h-full w-full object-cover">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col bg-gray-graybg px-6 py-5">
                <p className="text-[23px] font-exo-extrabold text-black-blacksecondary">
                  {item.name}
                </p>
                <p className="text-[16px] font-exo-regular text-gray-graytext">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center bg-white md:py-[100px] py-[50px]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[24px] gap-[80px]">
          {card2Text.map((item) => {
            const isOdd = item.id % 2 === 0;
            return (
              <div
                key={item.id}
                className="lg:w-[460px] lg:h-[271px] w-[300px] h-[200px] relative z-10 md:mt-0 mt-[50px]"
              >
                <img
                  src={item.image}
                  alt="image1"
                  className={`w-full h-full object-cover ${
                    !isOdd ? "md:rounded-tl-[100px]" : "md:rounded-tr-[100px]"
                  } border-b-[5px] border-orange`}
                />
                <div className="absolute bottom-0 left-[25px] z-20">
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <img src={item.profile} alt="cardprofile" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[14px] font-exo-regular text-secondary uppercase">
                        {item.by}
                      </p>
                      <h2 className="text-[14px] font-exo-bold text-secondary uppercase">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-[28px] pl-[10px]">
                  <p className="text-[12px] font-exo-bold text-orange uppercase">
                    {item.date}
                  </p>
                  <p className="lg:text-[26px] text-[18px] font-exo-bold text-black-blacksecondary">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center md:my-[50px] mt-[80px]">
        <Button
          children="More Explore"
          onClick={() => {}}
          className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[4px] text-[15px] "
          type="button"
        />
      </div>
    </>
  );
};

export default Card;
