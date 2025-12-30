import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import OurTeam from "../pages/Our-Team/OurTeam";
import TeamDetail from "../pages/Our-Team/TeamDetail";

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
    ],
  },
]);
