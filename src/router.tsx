import { createHashRouter } from "react-router-dom";
import Root from "./root";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Institutions from "./pages/institutions";
import JoinUs from "./pages/join_us";
import OnlineApplication from "./pages/online_application";
import Partners from "./pages/partners";
import Resources from "./pages/resources";
import Trustees from "./pages/trustees";

const Router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "institutions",
        element: <Institutions />,
      },
      {
        path: "join-us",
        element: <JoinUs />,
      },
      {
        path: "online-application",
        element: <OnlineApplication />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "trustees",
        element: <Trustees />,
      },
    ],
  },
]);

export default Router;
