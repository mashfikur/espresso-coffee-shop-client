import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3 className="text-center text-4xl my-40 font-rancho">Welcome to coffee shop</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
