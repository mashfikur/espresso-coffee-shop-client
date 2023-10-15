import { useEffect, useState } from "react";
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";
import Coffee from "./Coffee";

const Products = () => {
  const [loadedCoffee, setLoadedCoffee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setLoadedCoffee(data));
  }, []);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const reamining = loadedCoffee.filter((coffee) => coffee._id !== _id);
          setLoadedCoffee(reamining);
        }
      });
  };

  return (
    <div className="my-28 max-w-[82.5rem] mx-auto ">
      <div className="text-center space-y-3">
        <p className="font-raleway text-xl"> --- Sip & Savor --- </p>
        <h3 className="font-rancho text-5xl">Our Popular Products</h3>
        <Link to="/add">
          <button className="flex font-rancho text-white bg-[#E3B577] rounded-lg border-2 mt-4 border-[#331A15] mx-auto gap-2 py-2 px-6 items-center text-xl">
            Add Coffee <BsCup className="text-black"></BsCup>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6 my-14 ">
        {loadedCoffee.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          ></Coffee>
        ))}
      </div>
    </div>
  );
};

export default Products;
