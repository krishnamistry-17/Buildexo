import Button from "./Button";
import InputField from "./InputField";

const Contact = () => {
  return (
    <>
      <div className=" bg-tertiary w-full">
        <div className="flex flex-col lg:px-[50px] px-[20px] lg:pt-[50px] pt-[20px]">
          <h2 className="xl:text-[36px] lg:text-[30px] md:text-[25px] text-[20px] font-exo-bold text-black-blacksecondary">
            Contact Me
          </h2>
          <p className="xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] font-exo-regular text-gray-graysecondary pt-[20px] text-justify">
            In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget
            mauris in nisl tempus lobortis.
          </p>
          <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[35px]">
            <InputField
              type="text"
              placeholder="FirstName"
              value=""
              onChange={() => {}}
              name="name"
            />
            <InputField
              type="phone"
              placeholder="Phone number"
              value=""
              onChange={() => {}}
              name="phone"
              className="md:mt-0 mt-[20px]"
            />
          </div>
          <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
            <InputField
              type="email"
              placeholder="Email address"
              value=""
              onChange={() => {}}
              name="email"
            />
            <InputField
              type="select"
              placeholder="Select Service Type"
              value="select service"
              className="md:mt-0 mt-[20px]"
              onChange={() => {}}
              name="serviceType"
              options={[
                "Select Service Type",
                "Service Type 1",
                "Service Type 2",
                "Service Type 3",
              ]}
            />
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
              children="Send message"
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

export default Contact;
