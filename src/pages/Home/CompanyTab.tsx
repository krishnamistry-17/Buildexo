import {
  company1,
  company2,
  company3,
  company4,
  company5,
} from "../../assets/images";

const CompanyTab = () => {
  const companyList = [
    { id: "1", image: company1 },
    { id: "2", image: company2 },
    { id: "3", image: company3 },
    { id: "4", image: company4 },
    { id: "5", image: company5 },
  ];
  return (
    <>
      <div className=" py-[23px] lg:mx-0 sm:mx-[20px] bg-secondary drop-shadow-sm rounded-full mt-auto">
        <div className=" flex gap-[30px]">
          {companyList.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyTab;
