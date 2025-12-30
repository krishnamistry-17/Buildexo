import { Link } from "react-router-dom";

const PageMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="absolute top-12 left-0 w-[200px] bg-secondary z-50 rounded-sm p-3">
      <div className=" flex flex-col items-start justify-start gap-5 p-3">
        <Link to="/about" onClick={onClose}>
          About
        </Link>
        <Link to="/portfolio" onClick={onClose}>
          Portfolio
        </Link>
        <Link to="/ourteam" onClick={onClose}>
          Our Team
        </Link>
      </div>
    </div>
  );
};

export default PageMenu;
