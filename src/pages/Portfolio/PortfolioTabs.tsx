import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { PortfolioImage, PortfolioText } from "../../constance/Text";

const PortfolioTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        <TabList className="flex flex-wrap gap-[15px] mt-[10px] mx-auto xl:px-0 px-[20px]">
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
                    className="w-full h-full object-cover"
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
