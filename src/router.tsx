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
import Jobs from "./pages/jobs";
import OnlineApplication from "./pages/online_application";
import Partners from "./pages/partners";
import Resources from "./pages/resources";
import Trustees from "./pages/trustees";
import Conference1 from "./pages/event/conference";
import Conference3 from "./pages/event/conference3"
import Scholars from "./pages/event/scholars";
import Discussion from "./pages/event/discussion";
import Discussion2 from "./pages/event/discussion2";
import Fundraising from "./pages/event/fundraising";
import Funding from "./pages/event/funding";
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
      {
        path: "available-jobs",
        element: <Jobs />,
      },
      {
        path: "conference",
        element: <Conference1 />,
      },
      {
        path: "3rd-conference",
        element: <Conference3 />,
      },
      {
        path: "scholars",
        element: <Scholars />,
      },
      {
        path: "discussion",
        element: <Discussion />,
      },
      {
        path: "2nd-discussion",
        element: <Discussion2 />,
      },
      {
        path: "event-fundraising",
        element: <Fundraising/>,
      },
      {
        path: "event-maximizing-funding",
        element: <Funding />,
      },
    ],
  },
]);

export default Router;
