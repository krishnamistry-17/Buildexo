import { EnginnerText } from "../../constance/Text";

const Engineer = () => {
  return (
    <div className="flex justify-center md:pt-[150px] pt-[50px] pb-[80px] px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1240px] w-full">
        {EnginnerText.map((item) => (
          <div key={item.name} className="flex flex-col bg-white shadow-sm">
            <div className="aspect-[3/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col bg-cream-primary px-6 py-5">
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
