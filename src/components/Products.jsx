import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="my-28">
      <div className="text-center space-y-3">
        <p className="font-raleway text-xl"> --- Sip & Savor --- </p>
        <h3 className="font-rancho text-5xl">Our Popular Products</h3>
        <Link to="/add" >
          <button className="flex font-rancho text-white bg-[#E3B577] rounded-lg border-2 mt-4 border-[#331A15] mx-auto gap-2 py-2 px-6 items-center text-xl">
            Add Coffee <BsCup className="text-black"></BsCup>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
