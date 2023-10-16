import { useEffect } from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Products from "../components/Products";
import Social from "../components/Social";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Products></Products>
      <Social></Social>
    </div>
  );
};

export default Home;
