import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { downblack } from "../assets/svgs";
import Dropdown from "./Dropdown";

const JobForm = () => {
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [serviceMenu, setServiceMenu] = useState(false);
  return (
    <>
      <div className=" bg-tertiary w-full">
        <div className="flex flex-col lg:px-[50px] px-[20px] lg:pt-[50px] pt-[20px]">
          <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[35px]">
            <InputField
              type="text"
              placeholder="FirstName"
              value=""
              onChange={() => {}}
              name="name"
            />
            <InputField
              type="text"
              placeholder="LastName"
              value=""
              className="md:mt-0 mt-[20px]"
              onChange={() => {}}
              name="name"
            />
          </div>
          <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
            <InputField
              type="text"
              placeholder="Phone number"
              value=""
              onChange={() => {}}
              name="phone"
            />
            <InputField
              type="text"
              placeholder="Location (City)"
              value=""
              className="md:mt-0 mt-[20px]"
              onChange={() => {}}
              name="location"
            />
          </div>
          <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
            <div className="w-full">
              <InputField
                type="email"
                placeholder="Email address"
                value=""
                onChange={() => {}}
                name="email"
              />
            </div>
            <div className=" relative w-full md:mt-0 mt-[20px]">
              <div
                className="flex items-center justify-between
            w-full py-[22px] px-[31px] shadow-sm bg-secondary
            focus:outline-none focus:ring-0
            rounded-[30px] cursor-pointer
            "
                onClick={() => setServiceMenu(!serviceMenu)}
              >
                <p className="text-[15px] font-exo-medium text-gray-graysecondary">
                  {serviceType || "Select Position"}
                </p>
                <img
                  src={downblack}
                  alt="downarrow"
                  className={`${serviceMenu ? "rotate-180" : ""}`}
                />
              </div>
              {serviceMenu && (
                <Dropdown
                  isApplyJob={true}
                  serviceType={serviceType}
                  setServiceType={setServiceType}
                  setServiceMenu={setServiceMenu}
                />
              )}
            </div>
          </div>
          <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
            <InputField
              type="text"
              placeholder="Portfolio / Website link.."
              value=""
              onChange={() => {}}
              name="portfolio"
            />
            <InputField
              type="text"
              placeholder="Your expected salary"
              value=""
              className="md:mt-0 mt-[20px]"
              onChange={() => {}}
              name="salary"
            />
          </div>
          <h2 className="text-[20px] font-exo-medium text-black-blacksecondary pt-[19px]">
            Upload CV
          </h2>
          <div className="pt-[10px]">
            <input type="file" className="w-full" />
          </div>
          <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
            <InputField
              type="textarea"
              placeholder="Type your message"
              value=""
              onChange={() => {}}
              name="message"
            />
          </div>
          <div className="flex justify-center items-center my-3">
            <Button
              children="Submit now"
              onClick={() => {}}
              className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[4px] text-[15px] "
              type="button"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobForm;
