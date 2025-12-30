import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer";
import MainNav from "./MainNav";
import NavbarWrapper from "../NavbarWrapper";
import Navbar from "./Navbar";
import ScrollWindow from "../ScrollWindow";

const Layout = () => {
  const location = useLocation();
  const isNotHome = location.pathname !== "/";
  return (
    <div>
      {isNotHome ? (
        <NavbarWrapper>
          <MainNav />
        </NavbarWrapper>
      ) : (
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
      )}
      <ScrollWindow>
        <Outlet />
      </ScrollWindow>
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
