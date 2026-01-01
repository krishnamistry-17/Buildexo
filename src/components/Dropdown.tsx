interface DropdownProps {
  serviceType: string | null;
  setServiceType: (serviceType: string | null) => void;
  setServiceMenu: (serviceMenu: boolean) => void;
  isApplyJob: boolean;
}

const Dropdown = ({
  serviceType,
  setServiceType,
  setServiceMenu,
  isApplyJob,
}: DropdownProps) => {
  return (
    <div
      className="absolute top-full left-0 z-50 mt-2
                w-full bg-secondary rounded-[30px] p-3 cursor-pointer
                "
    >
      <div
        className="flex flex-col gap-[10px] p-3"
        onClick={() => {
          setServiceType(`${isApplyJob ? "Position" : "Service Type 1"}`);
          setServiceMenu(false);
        }}
      >
        <p className="text-[15px] font-exo-medium text-gray-graysecondary">
          {isApplyJob ? "Position 1" : "Service Type 1"}
        </p>
      </div>
      <div
        className="flex flex-col gap-[10px] p-3"
        onClick={() => {
          setServiceType(`${isApplyJob ? "Position 2" : "Service Type 2"}`);
          setServiceMenu(false);
        }}
      >
        <p className="text-[15px] font-exo-medium text-gray-graysecondary">
          {isApplyJob ? "Position 2" : "Service Type 2"}
        </p>
      </div>
      <div
        className="flex flex-col gap-[10px] p-3"
        onClick={() => {
          setServiceType(`${isApplyJob ? "Position 3" : "Service Type 3"}`);
          setServiceMenu(false);
        }}
      >
        <p className="text-[15px] font-exo-medium text-gray-graysecondary">
          {isApplyJob ? "Position 3" : "Service Type 3"}
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
