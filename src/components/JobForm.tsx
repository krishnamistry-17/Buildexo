import Button from "./Button";
import InputField from "./InputField";

const JobForm = () => {
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
            <InputField
              type="email"
              placeholder="Email address"
              value=""
              onChange={() => {}}
              name="email"
            />
            <InputField
              type="select"
              placeholder="Position"
              value="Position"
              className="md:mt-0 mt-[20px]"
              onChange={() => {}}
              name="Position"
              options={["Position", "Position 1", "Position 2", "Position 3"]}
            />
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
