import { renovation } from "../../assets/images";
import { sc } from "../../assets/svgs";
import Button from "../../components/Button";

const RenovationCard = () => {
  return (
    <section className="relative w-full md:mt-0 mt-[50px]
     lg:pt-[150px] md:pt-[100px] pt-[50px] md:pb-[100px] pb-[50px]">
      {/*Image */}
      <img
        src={renovation}
        alt="renovationCard"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/*Content */}
      <div className=" relative z-10 flex flex-col items-center justify-center">
        <img src={sc} alt="sc" className="mb-[10px]" />
        <p className="text-[16px] font-exo-regular text-orange uppercase">
          WE WON MANY FACTORY AWARDS
        </p>
        <h2
          className="xl:text-[100px] lg:text-[80px] md:text-[60px] text-[40px] line-height-[100px]
        font-exo-extrabold text-transparent stroke-text"
        >
          Your Renovation
        </h2>
        <h2 className="xl:text-[90px] lg:text-[70px] md:text-[50px] text-[30px] font-exo-extrabold text-secondary line-height-[90px]">
          Starts Here
        </h2>
        <Button
          children="More Explore"
          onClick={() => {}}
          className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[4px] text-[15px] mt-[30px]"
          type="button"
        />
      </div>
    </section>
  );
};

export default RenovationCard;
