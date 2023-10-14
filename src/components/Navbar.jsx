import navLogo from "../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <div className="navBg  text-white  flex flex-col items-center">
      <div className="flex py-3 gap-2 items-center">
        <div>
          <img className="w-[4.75rem]" src={navLogo} alt="" />
        </div>
        <div>
          <h3 className="font-rancho text-5xl ">Espresso Emporium</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
