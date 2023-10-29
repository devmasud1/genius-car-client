import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/logIn/logIn";
import Register from "../pages/Register/Register";
import CheckOut from "../pages/checkOut/checkOut";
import Booking from "../pages/Booking/Booking";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services/:id",
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/booking",
        element: <PrivateRoutes> <Booking></Booking></PrivateRoutes>,
      },
    ],
  },
]);

export default Routes;
