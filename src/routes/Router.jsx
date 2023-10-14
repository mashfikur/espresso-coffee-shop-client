import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import AddCoffee from "../pages/AddCoffee";

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
    ],
  },
]);

export default router;
