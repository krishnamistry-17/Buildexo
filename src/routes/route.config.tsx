import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import OurTeam from "../pages/Our-Team/OurTeam";
import TeamDetail from "../pages/Our-Team/TeamDetail";
import Pricing from "../pages/Services/Price/Pricing";
import Career from "../pages/Services/Career/Career";
import CareerDetails from "../pages/Services/Career/CareerDetails";
import ApplyJob from "../pages/Services/ApplyJob/ApplyJob";
import FaqSection from "../pages/FAQ/Faq";
import Errorpage from "../pages/404";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/ourteam",
        element: <OurTeam />,
      },
      {
        path: "/ourteam/team-detail/:id",
        element: <TeamDetail />,
      },
      {
        path: "/services/pricing",
        element: <Pricing />,
      },
      {
        path: "/services/career",
        element: <Career />,
      },
      {
        path: "/services/career/career-details/:id",
        element: <CareerDetails />,
      },
      {
        path: "/services/apply-job",
        element: <ApplyJob />,
      },
      {
        path: "/faq",
        element: <FaqSection />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },
]);
