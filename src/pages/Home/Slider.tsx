import SliderMenu from "../../components/SliderMenu";
import { sliderList } from "../../constance/Text";
import useWindowWidth from "../../hooks/useWindowWidth";

const Slider = () => {
  const width = useWindowWidth();

  const visibleCount =
    width > 1280 ? 4 : width > 1024 ? 3 : width > 768 ? 2 : 1;

  return (
    <div className="mx-auto max-w-[1220px] w-full">
      <SliderMenu
        items={sliderList}
        visibleCount={visibleCount}
        renderItem={(item) => (
          <div
            key={item.id}
            className="flex flex-col gap-[10px] sm:px-[26.5px] pb-[30px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-[10px] max-w-[227px] max-h-[222px] object-cover"
            />

            <div className="flex items-center gap-[15px] pt-[20px]">
              <div className="rounded-full bg-gray-lightgray py-[19px] px-[16px]">
                <img src={item.icon} alt={item.title} />
              </div>

              <p className="text-[22px] font-exo-bold text-black-blacksecondary max-w-[80px]">
                {item.description}
              </p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Slider;
