import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      {/* <div className=" w-full mx-auto flex justify-center items-center z-10 relative py-[20px]">
        <Navbar />
      </div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
