import Contact from "../components/Contact";
import Herosection from "../components/HeroSection";

const ContactPage = () => {
  return (
    <>
      <Herosection currentPage="Contact Us" previousPage="Home" />
      <div className="flex flex-col justify-center items-center mx-auto max-w-[1240px] xl:px-0 px-[20px] w-full">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
