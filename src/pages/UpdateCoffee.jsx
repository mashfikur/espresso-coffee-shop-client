import { useEffect } from "react";
import toast from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coffeeData = useLoaderData();
  const navigate = useNavigate();

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

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${coffeeData._id}/update`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Coffee Updated Successfully");
          form.reset();
          navigate("/");
        }
      });
  };
  return (
    <div className="add-bg">
      <div className="max-w-[82.5rem] mx-auto">
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
          <h3 className="text-center font-rancho text-5xl mb-12 pb-3 border-b-2 border-black ">
            Update Coffee
          </h3>

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
                      defaultValue={coffeeData.name}
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
                      defaultValue={coffeeData.supplier}
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
                      defaultValue={coffeeData.category}
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
                      defaultValue={coffeeData.chef}
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
                      defaultValue={coffeeData.taste}
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
                      defaultValue={coffeeData.details}
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
                  defaultValue={coffeeData.photo}
                />
              </label>
            </div>
            <div className="flex flex-col mt-6">
              <button className="font-rancho text-xl bg-[#D2B48C] border-2 border-[#331A15] py-3 rounded-md">
                {" "}
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
