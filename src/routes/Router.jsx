import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";
import SIgnIn from "../pages/SIgnIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://espresso-coffee-shop-server.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://espresso-coffee-shop-server.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/sign-in",
        element: <SIgnIn></SIgnIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://espresso-coffee-shop-server.vercel.app/users"),
      },
    ],
  },
]);

export default router;
