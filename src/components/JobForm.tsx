import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { downblack } from "../assets/svgs";
import Dropdown from "./Dropdown";
import * as Yup from "yup";
import { Form, Formik } from "formik";
const JobForm = () => {
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [serviceMenu, setServiceMenu] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
    email: "",
    portfolio: "",
    salary: "",
    message: "",
    serviceType: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    location: Yup.string().required("Location is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    portfolio: Yup.string().required("Portfolio is required"),
    salary: Yup.string().required("Salary is required"),
    message: Yup.string().required("Message is required"),
    serviceType: Yup.string().required("Service type is required"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className=" bg-tertiary w-full">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => {
            return (
              <>
                <Form>
                  <div className="flex flex-col lg:px-[50px] px-[20px] lg:pt-[50px] pt-[20px]">
                    <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[35px]">
                      <div className="w-full flex flex-col">
                        <InputField
                          type="text"
                          placeholder="FirstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="firstName"
                          error={!!(errors.firstName && touched.firstName)}
                        />
                        {errors.firstName && touched.firstName && (
                          <p className="text-red text-[12px] p-2">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="w-full flex flex-col">
                        <InputField
                          type="text"
                          placeholder="LastName"
                          value={values.lastName}
                          className="md:mt-0 mt-[20px]"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="name"
                          error={!!(errors.lastName && touched.lastName)}
                        />
                        {errors.lastName && touched.lastName && (
                          <p className="text-red text-[12px] p-2">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
                      <div className="w-full flex flex-col">
                        <InputField
                          type="text"
                          placeholder="Phone number"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="phone"
                          error={!!(errors.phone && touched.phone)}
                        />
                        {errors.phone && touched.phone && (
                          <p className="text-red text-[12px] p-2">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div className="w-full flex flex-col">
                        <InputField
                          type="text"
                          placeholder="Location (City)"
                          value={values.location}
                          className="md:mt-0 mt-[20px]"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="location"
                          error={!!(errors.location && touched.location)}
                        />
                        {errors.location && touched.location && (
                          <p className="text-red text-[12px] p-2">
                            {errors.location}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
                      <div className="w-full flex flex-col">
                        <InputField
                          type="email"
                          placeholder="Email address"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="email"
                          error={!!(errors.email && touched.email)}
                        />
                        {errors.email && touched.email && (
                          <p className="text-red text-[12px] p-2">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className=" relative w-full md:mt-0 mt-[20px]">
                        <div className="w-full flex flex-col">
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
                        {errors.serviceType && touched.serviceType && (
                          <p className="text-red text-[12px] p-2">
                            {errors.serviceType}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
                      <div className="w-full flex flex-col">
                        <InputField
                          type="text"
                          placeholder="Portfolio / Website link.."
                          value={values.portfolio}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="portfolio"
                          error={!!(errors.portfolio && touched.portfolio)}
                        />
                        {errors.portfolio && touched.portfolio && (
                          <p className="text-red text-[12px] p-2">
                            {errors.portfolio}
                          </p>
                        )}
                      </div>
                      <div className="w-full flex flex-col">
                        <InputField
                          type="text"
                          placeholder="Your expected salary"
                          value={values.salary}
                          className="md:mt-0 mt-[20px]"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="salary"
                          error={!!(errors.salary && touched.salary)}
                        />
                        {errors.salary && touched.salary && (
                          <p className="text-red text-[12px] p-2">
                            {errors.salary}
                          </p>
                        )}
                      </div>
                    </div>
                    <h2 className="text-[20px] font-exo-medium text-black-blacksecondary pt-[19px]">
                      Upload CV
                    </h2>
                    <div className="pt-[10px]">
                      <input type="file" className="w-full" />
                    </div>
                    <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
                      <div className="w-full flex flex-col">
                        <InputField
                          type="textarea"
                          placeholder="Type your message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="message"
                          error={!!(errors.message && touched.message)}
                        />
                        {errors.message && touched.message && (
                          <p className="text-red text-[12px] p-2">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center items-center my-3">
                      <Button
                        children="Submit now"
                        onClick={() => {}}
                        className="bg-orange px-8 py-4 font-exo-bold  uppercase text-secondary rounded-[4px] text-[15px] "
                        type="submit"
                      />
                    </div>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default JobForm;
