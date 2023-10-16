import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <div className="navBg  text-white flex flex-col items-center">
      <div className="flex py-2 gap-2 items-center">
        <div>
          <img className="w-[4.75rem]" src={navLogo} alt="" />
        </div>
        <div>
          <Link to={"/"}>
            <h3 className="font-rancho text-5xl ">Espresso Emporium</h3>
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex gap-4 my-6 font-semibold">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/sign-in"}>Login </NavLink>
          <NavLink to={"/sign-up"}>Sign Up</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
