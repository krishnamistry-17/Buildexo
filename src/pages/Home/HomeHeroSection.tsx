import { heroimage } from "../../assets/images";
// import Navbar from "../../components/layout/Navbar";
// import NavbarWrapper from "../../components/NavbarWrapper";

const HomeHeroSection = () => {
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
      {/* <NavbarWrapper top="20px">
        <Navbar />
      </NavbarWrapper> */}
    </section>
  );
};

export default HomeHeroSection;
