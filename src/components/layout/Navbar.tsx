import { Link, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import PageMenu from "../PageMenu";
import ServiceMenu from "../ServiceMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageMenuOpen, setPageMenuOpen] = useState(false);
  const [ServiceMenuOpen, setServiceMenuOpen] = useState(false);

  const navigate = useNavigate();
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
    {
      label: "Pages",
      to: "",
      icon: downarrow,
      pageMenu: true,
      showDownArrow: true,
    },
    {
      label: "Services",
      to: "",
      icon: downarrow,
      ServiceMenu: true,
      showDownArrow: true,
    },
    { label: "Blog", to: "/blog", icon: downarrow, showDownArrow: false },
    { label: "Shop", to: "/shop", icon: downarrow, showDownArrow: false },
    { label: "Contact", to: "/contact", icon: downarrow, showDownArrow: false },
  ];

  const menuItems = [
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Our Team", to: "/ourteam" },
    { label: "Price", to: "/services/pricing" },
    { label: "Career", to: "/services/career" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".navbar-container")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={`absolute top-[20px] left-0 w-full z-10`}>
      <div className=" w-full flex justify-center items-center mx-auto  ">
        <div className=" flex items-stretch">
          {/*logo */}
          <div className=" flex items-center bg-secondary rounded-[10px] xl:pt-[41px] py-[12px] xl:pb-[36px] px-[28.31px]">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
          </div>
          {/*social items */}
          <div className=" flex flex-col">
            <div className=" xl:flex items-center lg:rounded-tr-[10px] bg-black-blackprimary px-5 xl:py-2">
              <div className=" xl:flex hidden flex-wrap items-center gap-5">
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
                  <div key={item.label} className="relative">
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() =>
                        (item.pageMenu && setPageMenuOpen(!pageMenuOpen)) ||
                        (item.ServiceMenu &&
                          setServiceMenuOpen(!ServiceMenuOpen))
                      }
                    >
                      <Link
                        to={item.to}
                        className=" text-[17px] font-exo-bold text-secondary "
                      >
                        {item.label}
                      </Link>
                      {item.showDownArrow && (
                        <img src={item.icon} alt={item.label} />
                      )}
                    </div>
                    {item.pageMenu && pageMenuOpen && (
                      <div className="absolute top-full left-0 z-50">
                        <PageMenu onClose={() => setPageMenuOpen(false)} />
                      </div>
                    )}
                    {item.ServiceMenu && ServiceMenuOpen && (
                      <div className="absolute top-full left-0 z-50">
                        <ServiceMenu
                          onClose={() => setServiceMenuOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className=" flex items-center gap-5 lg:py-0 py-[21px]">
                <img src={search} alt="search" />
                <img src={cart} alt="cart" />
                <div className="lg:flex hidden items-center gap-2 bg-orange xl:py-[19px] xl:px-[30px] py-[10px] px-[20px] m-2 rounded-br-[10px]">
                  <button className=" font-exo-extrabold xl:text-[16px] text-[14px] text-secondary uppercase">
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
                <div className=" absolute top-20 sm:right-[168px] right-0 w-[250px] bg-white h-fit bg-black-secondary rounded-[10px] p-[10px] z-10">
                  <div className=" flex items-center justify-end">
                    <button onClick={toggleMenu}>
                      <X className=" text-black-secondary" />
                    </button>
                  </div>
                  <div className=" flex flex-col items-start justify-start gap-5">
                    {menuItems.map((item) => (
                      <Link
                        to={item.to}
                        className="flex items-start justify-start gap-2"
                        key={item.label}
                      >
                        <p className=" text-[17px] font-exo-medium text-black-blackprimary">
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
    </div>
  );
};

export default Navbar;
