import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <Link to={"/"}>
          <h3 className="font-rancho drop-shadow-2xl my-12 gap-8 flex items-center text-2xl">
            {" "}
            <BsArrowLeft></BsArrowLeft> Back to home{" "}
          </h3>
        </Link>

        <div className="px-28 py-16 bg-[#F4F3F0] mb-28">
          <h3 className="text-center font-rancho text-5xl">Add New Coffee</h3>
          <p className="font-raleway text-center my-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at <br /> its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed <br /> to using Content here.
          </p>

          <form>
            <div className="flex justify-between items-center gap-5">
              <div className="flex-1 space-y-6">
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Name
                    </h3>
                    <input
                      className=" w-full  focus:outline-none font-raleway p-3"
                      placeholder="Enter coffee name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Name
                    </h3>
                    <input
                      className=" w-full  focus:outline-none font-raleway p-3"
                      placeholder="Enter coffee name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Name
                    </h3>
                    <input
                      className=" w-full  focus:outline-none font-raleway p-3"
                      placeholder="Enter coffee name"
                    />
                  </label>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Name
                    </h3>
                    <input
                      className=" w-full  focus:outline-none font-raleway p-3"
                      placeholder="Enter coffee name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Name
                    </h3>
                    <input
                      className=" w-full  focus:outline-none font-raleway p-3"
                      placeholder="Enter coffee name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Name
                    </h3>
                    <input
                      className=" w-full  focus:outline-none font-raleway p-3"
                      placeholder="Enter coffee name"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <button className="font-rancho text-xl bg-[#D2B48C] border-2 border-[#331A15] py-3 rounded-md">
                {" "}
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
