import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";

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
        path: "/coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

export default router;
