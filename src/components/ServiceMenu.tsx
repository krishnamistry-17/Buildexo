import { Link } from "react-router-dom";

const ServiceMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="absolute top-12 left-0 w-[200px] bg-secondary z-50 rounded-sm p-3">
      <div className=" flex flex-col items-start justify-start gap-5 p-3">
        <Link to="/services/pricing" onClick={onClose}>
          Price
        </Link>
        <Link to="/services/career" onClick={onClose}>
          Career
        </Link>
      </div>
    </div>
  );
};
export default ServiceMenu;
