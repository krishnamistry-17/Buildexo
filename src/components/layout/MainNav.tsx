import { Menu, X } from "lucide-react";
import {
  cart,
  construction,
  downarrow,
  location,
  logo,
  mail,
  rightarrow,
  search,
} from "../../assets/svgs";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageMenu from "../PageMenu";
import ServiceMenu from "../ServiceMenu";

const MainNav = () => {
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
        !event.target.closest(".main-nav-container")
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
    <div className="flex flex-col relative">
      <div
        className=" lg:flex hidden justify-center items-center 
      lg:rounded-tr-[10px] bg-black-blackprimary px-5 py-2 mx-auto"
      >
        <div className=" flex  flex-wrap items-center gap-5 ">
          {socialItems.map((item) => (
            <div className=" flex items-center gap-2" key={item.label}>
              <img src={item.icon as string} alt={item.label} />
              <p className=" text-[16px] font-exo-regular text-secondary">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full flex justify-center items-center  mx-auto">
        <div className="flex items-center bg-orange  rounded-l-full relative">
          {/*logo */}
          <div className=" flex items-center bg-white  rounded-l-full rounded-br-full lg:mr-0 mr-5 ">
            <img
              src={logo}
              alt="logo"
              onClick={() => navigate("/")}
              className="md:pt-[21px] md:pl-[16px] md:pb-[26px] md:pr-[50px] pt-[16px] pl-[10px] pb-[20px] pr-[40px]"
            />
          </div>
          {/*nav items */}
          <div className=" flex items-center gap-5">
            <div className=" lg:flex hidden flex-wrap items-center gap-5 px-[28px] py-[28px]">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      (item.pageMenu && setPageMenuOpen(!pageMenuOpen)) ||
                      (item.ServiceMenu && setServiceMenuOpen(!ServiceMenuOpen))
                    }
                  >
                    <Link
                      to={item.to}
                      className="text-[16px] font-exo-regular text-secondary"
                    >
                      {item.label}
                    </Link>
                    {item.showDownArrow && (
                      <img src={item.icon} alt={item.label} />
                    )}
                  </div>

                  {/* Page dropdown – opens directly below Pages */}
                  {item.pageMenu && pageMenuOpen && (
                    <div className="absolute top-full left-0 z-50">
                      <PageMenu onClose={() => setPageMenuOpen(false)} />
                    </div>
                  )}
                  {item.ServiceMenu && ServiceMenuOpen && (
                    <div className="absolute top-full left-0 z-50">
                      <ServiceMenu onClose={() => setServiceMenuOpen(false)} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className=" flex items-center gap-5 relative ">
              <div className=" flex items-center lg:gap-2 gap-5 ">
                <img src={search} alt="search" />
                <img src={cart} alt="cart" />
              </div>
              <div className="lg:flex hidden items-center gap-2 bg-red py-[28px] px-[30px] rounded-br-[10px]">
                <button className=" font-exo-extrabold text-[16px] text-secondary uppercase">
                  Get a Quote
                </button>
                <img
                  src={rightarrow}
                  alt="rightarrow"
                  className=" w-[12px] h-[16px] text-secondary"
                />
              </div>
              <button className="lg:hidden block mr-5" onClick={toggleMenu}>
                {<Menu className=" text-secondary mt-1" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className=" absolute top-24 sm:right-[168px] right-[9px] w-[200px] bg-white h-fit bg-black-secondary rounded-[10px] p-[10px] z-50">
          <div className=" flex items-center justify-end">
            <button onClick={toggleMenu}>
              <X className=" text-black-secondary" />
            </button>
          </div>
          <div
            className=" flex flex-col items-start justify-start gap-5"
            onClick={() => setMenuOpen(false)}
          >
            {menuItems.map((item) => (
              <Link
                to={item.to}
                className="flex items-start justify-start gap-2"
                key={item.label}
              >
                <p
                  className=" text-[17px] font-exo-medium text-black-blackprimary
                "
                >
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNav;
