import { useLocation } from "react-router-dom";
import { FooterText } from "../../constance/Text";

const Footer = () => {
  const location = useLocation();
  const isNotAbout = location.pathname !== "/about";
  return (
    <div className="bg-gradient-to-r from-purple-primary via-purple-secondary to-purple-light w-full">
      <div className="container mx-auto max-w-[1240px]">
        {FooterText.map((item, idx) => (
          <div key={idx}>
            <div className="flex flex-wrap justify-center items-center xl:gap-0 gap-[24px] py-[30px]">
              {item.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt="footer"
                  className={`${
                    isNotAbout
                      ? "block hover:scale-105 transition-all duration-300"
                      : "hidden"
                  }`}
                />
              ))}
            </div>

            <div
              className="
                grid
                xl:grid-cols-2
                grid-cols-1
                gap-y-[24px]
                xl:gap-y-0
                border-b border-secondary/20
                xl:px-0 px-[20px]
                place-items-center xl:place-items-stretch
              "
            >
              <div className="w-full md:flex justify-between items-center xl:border-r border-secondary/20 text-center xl:text-left">
                <div className="flex gap-[19px] items-center justify-center xl:justify-start md:py-[40px] py-[20px]">
                  <img
                    src={item.call}
                    alt="call"
                    className="bg-white p-[16px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-[17px] font-exo-bold text-orange leading-[28px]">
                      {item.callText}
                    </p>
                    <p className="text-[19px] font-exo-bold text-secondary leading-[24px]">
                      {item.callNumber}
                    </p>
                  </div>
                </div>

                <div className="flex gap-[23px] justify-center xl:justify-end items-center md:py-[50px] py-[20px] md:pr-[66px]">
                  {item.icons.map((icon: string, index: number) => (
                    <img key={index} src={icon} alt="icon" />
                  ))}
                </div>
              </div>

              <div className="w-full md:flex justify-between items-center gap-[35px] text-center xl:text-left">
                <div className="text-[19px] font-exo-bold text-secondary leading-[24px] md:py-[42px] py-[20px] xl:pl-[70px]">
                  <p>{item.letter}</p>
                </div>

                <div className="md:py-[38px] py-[20px]">
                  <div
                    className="flex items-center 
                  xl:justify-start justify-center
                   gap-[10px] bg-gradient-to-r from-purple-secondary to-purple-light rounded-[40px]"
                  >
                    <input
                      type="email"
                      placeholder="Your email"
                      className="
                        bg-transparent
                        outline-none
                        placeholder:text-purple-lightest
                        text-purple-lightest
                        font-exo-regular
                        text-[16px]
                        md:px-[30px] px-[12px]
                        py-[18px]
                      "
                    />
                    <button
                      className="
                        bg-purple-lightest
                        text-secondary
                        font-exo-bold
                        text-[16px]
                        px-[24px]
                        py-[18px]
                        rounded-[30px]
                      "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[70px] pb-[70px] xl:px-0 px-[20px]">
              <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[32px] text-center xl:text-left">
                <div className="flex flex-col items-center xl:items-start">
                  <img
                    src={item.weblogo}
                    alt="logo"
                    className="max-w-[148px]"
                  />
                  <p className="sm:text-[18px] text-[16px] font-exo-regular text-secondary leading-[28px] py-[18px]">
                    {item.description}
                  </p>
                  <img
                    src={item.payment}
                    alt="payment"
                    className="max-w-[271px]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-[22px] font-exo-extrabold text-secondary underline">
                    {item.resources.title}
                  </p>
                  <div className="flex flex-col pt-[35px] gap-[28px]">
                    {item.resources.links.map((link: any, i: number) => (
                      <a
                        key={i}
                        href={link.to}
                        className="text-[16px] text-secondary"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="text-[22px] font-exo-extrabold text-secondary underline">
                    {item.company.title}
                  </p>
                  <div className="flex flex-col pt-[35px] gap-[28px]">
                    {item.company.links.map((link: any, i: number) => (
                      <a
                        key={i}
                        href={link.to}
                        className="text-[16px] text-secondary"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="text-[22px] font-exo-extrabold text-secondary underline">
                    {item.helpPage.title}
                  </p>
                  <div className="flex flex-col pt-[35px] gap-[28px]">
                    {item.helpPage.links.map((link: any, i: number) => (
                      <a
                        key={i}
                        href={link.to}
                        className="text-[16px] text-secondary"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-secondary/20">
              <p className="text-[15px] font-exo-regular text-secondary text-center py-[31px]">
                © Copyright 2025 All rights reserved.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
