import { createHashRouter } from "react-router-dom";
import Root from "./root";
import NotFound from "./pages/notFound";
import Home from "./pages/home";


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
        path: "le-centre",
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;