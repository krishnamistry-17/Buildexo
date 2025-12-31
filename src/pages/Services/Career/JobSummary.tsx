import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { JobSummaryText } from "../../../constance/Text";

const JobSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className=" bg-black-blackquinary rounded-[10px] pt-[30px]">
        <h2 className="text-[26px] font-exo-bold text-secondary text-center border-b border-secondary/20 pb-[22px]">
          {JobSummaryText.title}
        </h2>
        <div className="flex flex-col gap-[24px] px-[30px] py-[27px]">
          {JobSummaryText.points.map((item, index) => {
            return (
              <div key={index + 1} className="flex flex-col gap-[10px]">
                <div className="flex items-center gap-[15px] border-b border-secondary/20 pb-[22px]">
                  <img src={item.icon} alt={item.title} />

                  <div className="flex flex-col gap-[5px]">
                    <p className="text-[16px] font-exo-regular text-secondary">
                      {item.title}
                    </p>
                    <p className="text-[16px] font-exo-regular text-secondary">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center items-center my-[20px]">
            <Button
              children="Apply for job"
              onClick={() => {
                navigate(`/services/apply-job`);
              }}
              className="bg-orange uppercase text-secondary font-exo-bold text-[15px]  px-[34px] py-[20px] rounded-[4px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default JobSummary;
