import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { PortfolioImage, PortfolioText } from "../../constance/Text";
import { useMediaQuery } from "react-responsive";
import useLoader from "../../hooks/useLoader";
import LoaderComponent from "../../components/Loader";

const PortfolioTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const { loading } = useLoader();

  if (loading) return <LoaderComponent />;

  return (
    <div>
      <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        <TabList
          className={`flex  flex-wrap gap-[15px] mt-[10px] mx-auto xl:px-0 px-[20px]
          ${isMobile ? "flex-col" : "flex-row"}
          `}
        >
          {PortfolioText?.[2].tabs?.map((tab, index) => (
            <Tab
              key={index}
              className="text-black-primary 
            md:text-[15px] text-[14px] font-exo-medium cursor-pointer px-[30px] py-[14px]
            border border-gray-graytabborder rounded-full
            focus:outline-none focus:ring-0 focus:border-none
            "
              selectedClassName="bg-orange text-secondary border-none"
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>
        {PortfolioImage.map((item, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] my-[50px] mx-auto max-w-[1240px] xl:px-0 px-[20px]">
              {item.images.map((image) => (
                <div key={image}>
                  <img
                    src={image}
                    alt={image}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default PortfolioTabs;
