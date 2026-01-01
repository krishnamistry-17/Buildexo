import { Link } from "react-router-dom";
import { herobg } from "../assets/images";
import { right } from "../assets/svgs";

interface HerosectionProps {
  currentPage: string;
  previousPage: string;
}

const Herosection = ({ currentPage, previousPage }: HerosectionProps) => {
  return (
    <section className="relative w-full xl:h-[90vh] h-[80vh]">
      <img
        src={herobg}
        alt="hero"
        className="absolute inset-0 lg:h-[70vh] h-[70vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center py-[200px]">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="xl:text-[60px] lg:text-[50px] md:text-[40px] text-[30px] text-center
             font-exo-bold text-secondary line-height-[78px]"
          >
            {currentPage}
          </h1>
          <div className="flex items-center gap-[10px] pt-[10px]">
            <Link
              to="/"
              className="text-secondary text-[17px] font-exo-regular"
            >
              {previousPage}
            </Link>
            <img src={right} alt="right" />
            <p className="text-secondary text-[17px] font-exo-regular">
              {currentPage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
