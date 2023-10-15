import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const singleCoffee = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { name, chef, supplier, taste, category, details, photo } =
    singleCoffee;

  return (
    <div className="add-bg">
      <div className="max-w-[82.5rem]  mx-auto">
        <div>
          <button>
            {" "}
            <Link
              to="/"
              className="font-rancho drop-shadow-2xl py-12 gap-6 flex items-center text-2xl"
            >
              <BsArrowLeft></BsArrowLeft> Back to home{" "}
            </Link>
          </button>
        </div>
        <div className="bg-[#F4F3F0] mb-32 py-28">
          <div className="flex items-center justify-center gap-28">
            <div className=" flex-1 flex flex-col items-end">
              <img className="w-[21rem]" src={photo} alt="coffee-image" />
            </div>
            <div className="font-semibold font-raleway text-[1.2rem] flex-1">
                <h3 className="font-rancho text-[2.29rem]">Niceties</h3>
              <h3>
                Name: <span className="font-normal"> {name}</span>{" "}
              </h3>
              <h3>
                Chef: <span className="font-normal"> {chef}</span>{" "}
              </h3>
              <h3>
                Supplier: <span className="font-normal"> {supplier}</span>{" "}
              </h3>
              <h3>
                Taste: <span className="font-normal"> {taste}</span>{" "}
              </h3>
              <h3>
                Category: <span className="font-normal"> {category}</span>{" "}
              </h3>
              <h3>
                Details: <span className="font-normal"> {details}</span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
