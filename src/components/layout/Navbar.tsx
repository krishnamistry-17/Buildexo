import { Link } from "react-router-dom";
import {
  construction,
  location,
  mail,
  logo,
  downarrow,
  search,
  cart,
  rightarrow,
} from "../../assets/svgs";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const socialItems = [
    {
      icon: construction,
      label: "Construction",
      detail: "We Will go through all the stages of construction",
    },
    {
      icon: location,
      label: "Location",
      detail: " 203 Madison Ave, New York, USA",
    },
    {
      icon: mail,
      label: "Mail",
      detail: "info@example.com",
    },
  ];

  const navItems = [
    { label: "Home", to: "/", icon: downarrow },
    { label: "Pages", to: "/pages", icon: downarrow },
    { label: "Services", to: "/services", icon: downarrow },
    { label: "Blog", to: "/blog", icon: downarrow },
    { label: "Shop", to: "/shop", icon: downarrow },
    { label: "Contact", to: "/contact", icon: downarrow },
  ];

  return (
    <>
      <div className=" w-full flex justify-center items-center mx-auto ">
        <div className=" flex items-stretch">
          {/*logo */}
          <div className=" flex items-center bg-secondary rounded-[10px] lg:pt-[41px] lg:pb-[36px] px-[28.31px]">
            <img src={logo} alt="logo" />
          </div>
          {/*social items */}
          <div className=" flex flex-col">
            <div className=" flex items-center lg:rounded-tr-[10px] bg-black-blackprimary px-5 py-2">
              <div className=" lg:flex hidden flex-wrap items-center gap-5">
                {socialItems.map((item) => (
                  <div className=" flex items-center gap-2" key={item.label}>
                    <img src={item.icon} alt={item.label} />
                    <p className=" text-[16px] font-exo-regular text-secondary">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-[47.24px] bg-black-blackprimary px-10 ">
              <div className=" lg:flex hidden items-center gap-5">
                {navItems.map((item) => (
                  <Link to={item.to} className="flex items-center gap-2">
                    <p className=" text-[17px] font-exo-bold text-secondary">
                      {item.label}
                    </p>
                    <img src={item.icon} alt={item.label} />
                  </Link>
                ))}
              </div>
              <div className=" flex items-center gap-5 py-[21px]">
                <img src={search} alt="search" />
                <img src={cart} alt="cart" />
                <div className="lg:flex hidden items-center gap-2 bg-orange py-[19px] px-[30px] rounded-br-[10px]">
                  <button className=" font-exo-extrabold text-[16px] text-secondary uppercase">
                    Get a Quote
                  </button>
                  <img
                    src={rightarrow}
                    alt="rightarrow"
                    className=" w-[12px] h-[16px] text-secondary"
                  />
                </div>
              </div>
              <div className="lg:hidden block">
                <button onClick={toggleMenu}>
                  {<Menu className=" text-secondary mt-1" />}
                </button>
              </div>
              {menuOpen && (
                <div className=" absolute top-20 right-0 w-[300px] bg-white h-fit bg-black-secondary rounded-[10px] p-[10px] z-10">
                  <div className=" flex items-center justify-end">
                    <button onClick={toggleMenu}>
                      <X className=" text-black-secondary" />
                    </button>
                  </div>
                  <div className=" flex flex-col items-start justify-start gap-5">
                    {navItems.map((item) => (
                      <Link
                        to={item.to}
                        className="flex items-start justify-start gap-2"
                      >
                        <p className=" text-[17px] font-exo-regular text-black-blackprimary">
                          {item.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
