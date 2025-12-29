import { building, crane, design, roof } from "../../assets/svgs";
import { image1, image2, image3, image4 } from "../../assets/images";

const Slider = () => {
  const sliderList = [
    {
      id: 1,
      image: image1,
      title: "Flooring",
      icon: roof,
      description: "Flooring Roofing",
    },
    {
      id: 2,
      image: image2,
      title: "Flooring",
      icon: building,
      description: "Building Renovation",
    },
    {
      id: 3,
      image: image3,
      title: "Flooring",
      icon: design,
      description: "Archaitecture Design",
    },
    {
      id: 4,
      image: image4,
      title: "Flooring",
      icon: crane,
      description: "Flooring Crane",
    },
  ];

  return (
    <>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[32px]">
        {sliderList.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col gap-[10px] px-[26.5px] pb-[30px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className=" rounded-[10px] max-w-[227px] max-h-[222px] object-cover"
            />
            <div className=" flex items-center gap-[15px] pt-[20px]">
              <div className=" rounded-full bg-gray-lightgray py-[19px] px-[16px]">
                <img src={item.icon} alt={item.title} className=" " />
              </div>
              <p className=" text-[22px] font-exo-bold text-black-blacksecondary max-w-[80px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
