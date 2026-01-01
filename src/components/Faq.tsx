import { useEffect, useState } from "react";
import { FaqText } from "../constance/Text";
import { minus, plus } from "../assets/svgs";
import { useLocation, useNavigate } from "react-router-dom";

const Faq = () => {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [show3Questions, setShow3Questions] = useState(
    FaqText.questions.slice(0, 3)
  );
  const { pathname } = useLocation();
 
  const navigate = useNavigate();
  useEffect(() => {
    const faqSection = pathname.includes("/faq");
    if (!faqSection) {
      setShow3Questions(FaqText.questions.slice(0, 3));
    } else {
      setShow3Questions(FaqText.questions.slice(0, 8));
    }
  }, [pathname]);

  const toggleSection = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setSectionOpen(!sectionOpen);
    setActiveIndex(index);
  };

  return (
    <div
      className={`${
        pathname.includes("/faq")
          ? "bg-secondary py-[20px]"
          : "bg-cream-secondary py-[30px]"
      }`}
    >
      <div className="flex flex-col pb-[9px]">
        {show3Questions.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col 
                ${
                  pathname.includes("/faq")
                    ? "md:pl-[45px] pt-[30px] pr-[15px] "
                    : "xl:pl-[70px] xl:pr-[40px] xl:pt-[30px] p-[20px]"
                }
                `}
            >
              <div
                className={`border-b border-black-blackquinary ${
                  index === show3Questions.length - 1
                    ? "border-b-0"
                    : "border-b"
                }`}
              >
                {/* Question */}
                <div
                  className="flex items-start justify-between gap-[12px] cursor-pointer pb-[22px]"
                  onClick={(e) => toggleSection(index, e)}
                >
                  <p
                    className={`text-[18px] md:text-[20px] font-exo-bold text-black-blackfaq
                    ${pathname.includes("/faq") && "md:text-[25px] text-[20px]"}
                    `}
                  >
                    {item.question}
                  </p>
                  <img
                    src={activeIndex === index ? minus : plus}
                    alt="icon"
                    className="mt-[6px]"
                  />
                </div>

                {/* Answer */}
                {activeIndex === index && (
                  <p
                    className={`text-[15px] md:text-[16px] font-exo-regular text-black-blackpara pb-[22px] leading-[24px]
                    ${pathname.includes("/faq") && "md:text-[18px] text-[16px]"}
                    `}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
        <div
          className={`
          ${
            pathname.includes("/faq")
              ? " hidden"
              : "flex justify-center items-center w-full"
          }
          `}
        >
          <div
            className="bg-orange   py-[12px] px-[80px]  "
            onClick={() => {
              navigate("/faq");
            }}
          >
            <button className="text-secondary font-exo-bold sm:text-[15px] text-[12px]">
              Visit More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
