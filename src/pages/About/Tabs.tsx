import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AboutCompanyText } from "../../constance/Text";
import { useState } from "react";

const CompanyTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="border-b border-black-blacksecondary/20 pb-[27px]">
      <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        <TabList className="flex gap-[10px] border-b border-black-blacksecondary/20">
          {AboutCompanyText.tabs.map((tab, index) => (
            <Tab
              key={index}
              className="text-black-blacksecondary 
              md:text-[18px] text-[14px] font-exo-semibold cursor-pointer px-[20px] py-[11px]
              focus:outline-none focus:ring-0 focus:border-none
              "
              selectedClassName="bg-orange/10"
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>

        {AboutCompanyText.tabs.map((tab, index) => (
          <TabPanel key={index}>
            <h2 className="text-black-primary text-[16px] font-exo-regular border-l border-orange pl-[22.5px] py-[5px] pt-[27px] max-w-[691px]">
              {tab.description}
            </h2>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CompanyTabs;
