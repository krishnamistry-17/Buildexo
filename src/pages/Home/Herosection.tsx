import { heroimage } from "../../assets/images";
import Navbar from "../../components/layout/Navbar";

const Herosection = () => {
  return (
    <section className="relative h-[90vh] w-full">
      {/* BACKGROUND IMAGE */}
      <img
        src={heroimage}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* NAVBAR OVER IMAGE */}
      <div className="absolute top-[20px] left-0 w-full">
        <Navbar />
      </div>
    </section>
  );
};

export default Herosection;
