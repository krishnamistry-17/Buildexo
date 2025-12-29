import { EnginnerText } from "../../constance/Text";

const Engineer = () => {
  return (
    <div className="flex justify-center items-center pt-[200px] pb-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] max-w-[1240px]">
        {EnginnerText.map((item) => (
          <div key={item.name}>
            <div className="xs:px-[10px] md:px-0">
              <img
                src={item.image}
                alt={item.name}
                className=" object-cover drop-shadow-sm bg-white md:w-[375px] md:h-[483px] w-[200px] h-[250px]"
              />
            </div>

            <div className="flex flex-col bg-cream-primary pl-[40px] pt-[25px] pb-[25px]">
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
  );
};

export default Engineer;
