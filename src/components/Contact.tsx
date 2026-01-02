import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { downblack } from "../assets/svgs";
import Dropdown from "./Dropdown";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [serviceMenu, setServiceMenu] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only numbers")
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must be at most 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    message: Yup.string().required("Message is required"),
    serviceType: Yup.string().required("Service type is required"),
  });

  const initialValues = {
    firstName: "",
    phone: "",
    email: "",
    message: "",
    serviceType: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className=" bg-tertiary w-full">
        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => {
            const handleNameChange = (e: React.ChangeEvent<any>) => {
              const trimmedValue = e.target.value.trimStart();
              setFieldValue("firstName", trimmedValue);
            };
            const handleNameBlur = (e: React.FocusEvent<any>) => {
              const trimmedValue = e.target.value.trim();
              setFieldValue("firstName", trimmedValue);
              handleBlur(e);
            };
            const handlePhoneChange = (e: React.ChangeEvent<any>) => {
              const trimmedValue = e.target.value.trimStart();
              setFieldValue("phone", trimmedValue);
            };
            const handlePhoneBlur = (e: React.FocusEvent<any>) => {
              const trimmedValue = e.target.value.trim();
              setFieldValue("phone", trimmedValue);
              handleBlur(e);
            };
            return (
              <>
                <Form method="POST" noValidate>
                  <div className="flex flex-col lg:px-[50px] px-[20px] lg:pt-[50px] pt-[20px]">
                    <h2 className="xl:text-[36px] lg:text-[30px] md:text-[25px] text-[20px] font-exo-bold text-black-blacksecondary">
                      Contact Me
                    </h2>
                    <p className="xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] font-exo-regular text-gray-graysecondary pt-[20px] text-justify">
                      In nec libero luctus, aliquet turpis at, vehicula nisi.
                      Cras eget mauris in nisl tempus lobortis.
                    </p>
                    <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[35px]">
                      <div className="w-full flex flex-col">
                        <InputField
                          type="text"
                          placeholder="FirstName"
                          value={values.firstName}
                          onChange={handleNameChange}
                          onBlur={handleNameBlur}
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
                          type="phone"
                          placeholder="Phone number"
                          value={values.phone}
                          onChange={handlePhoneChange}
                          onBlur={handlePhoneBlur}
                          name="phone"
                          className="md:mt-0 mt-[20px]"
                          error={!!(errors.phone && touched.phone)}
                        />
                        {errors.phone && touched.phone && (
                          <p className="text-red text-[12px] p-2">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="md:flex flex-col md:flex-row items-center gap-[20px] pt-[19px]">
                      <div className="w-full">
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
                      <div
                        className=" relative w-full
            md:mt-0 mt-[20px]
            "
                      >
                        <div
                          className="flex items-center justify-between
            w-full py-[22px] px-[31px] shadow-sm bg-secondary
            focus:outline-none focus:ring-0 
            rounded-[30px] cursor-pointer
            "
                          onClick={() => setServiceMenu(!serviceMenu)}
                        >
                          <p className="text-[15px] font-exo-medium text-gray-graysecondary">
                            {serviceType || "Select Service Type"}
                          </p>
                          <img
                            src={downblack}
                            alt="downarrow"
                            className={`${serviceMenu ? "rotate-180" : ""}`}
                          />
                        </div>
                        {serviceMenu && (
                          <Dropdown
                            isApplyJob={false}
                            serviceType={serviceType}
                            setServiceType={setServiceType}
                            setServiceMenu={setServiceMenu}
                          />
                        )}
                        {errors.serviceType && touched.serviceType && (
                          <p className="text-red text-[12px] p-2">
                            {errors.serviceType}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="md:flex flex-col md:flex-row items-center gap-[24px] pt-[19px]">
                      <div className="w-full">
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
                        children="Send message"
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

export default Contact;
