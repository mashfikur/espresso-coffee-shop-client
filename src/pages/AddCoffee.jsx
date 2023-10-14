import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log(newCoffee);
  };

  return (
    <div className="add-bg">
      <div className="container mx-auto">
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

        <div className="px-28 py-16 bg-[#F4F3F0] mb-28">
          <h3 className="text-center font-rancho text-5xl">Add New Coffee</h3>
          <p className="font-raleway text-center my-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at <br /> its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed <br /> to using Content here.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center gap-5">
              <div className="flex-1 space-y-6">
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Name
                    </h3>
                    <input
                      className=" w-full  focus:outline-none rounded-md font-raleway p-3"
                      placeholder="Enter coffee name"
                      name="name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Supplier
                    </h3>
                    <input
                      className=" w-full  focus:outline-none rounded-md font-raleway p-3"
                      placeholder="Enter coffee supplier"
                      name="supplier"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Category
                    </h3>
                    <input
                      className=" w-full  focus:outline-none rounded-md font-raleway p-3"
                      placeholder="Enter coffee category"
                      name="category"
                    />
                  </label>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Chef
                    </h3>
                    <input
                      className=" w-full  focus:outline-none rounded-md font-raleway p-3"
                      placeholder="Enter coffee chef"
                      name="chef"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Taste
                    </h3>
                    <input
                      className=" w-full  focus:outline-none rounded-md font-raleway p-3"
                      placeholder="Enter coffee taste"
                      name="taste"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <h3 className="font-semibold font-raleway mb-4 text-xl">
                      Details
                    </h3>
                    <input
                      className=" w-full  focus:outline-none rounded-md font-raleway p-3"
                      placeholder="Enter coffee details"
                      name="details"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label>
                <h3 className="font-semibold font-raleway mb-4 text-xl">
                  Photo
                </h3>
                <input
                  className=" w-full  focus:outline-none rounded-md font-raleway p-3"
                  placeholder="Enter photo URL"
                  name="photo"
                />
              </label>
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
