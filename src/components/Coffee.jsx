import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, handleDelete }) => {
  const deleteCoffee = (_id) => {
    Swal.fire({
      title: "Do you want to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        handleDelete(_id);
      }
    });
  };

  return (
    <div className="flex items-center p-7 bg-[#F5F4F1] rounded-md">
      <div className="flex-1 items-start">
        <img src={coffee.photo} alt="" />
      </div>
      <div className="flex items-center text-[1.1rem] flex-1">
        <div className="font-raleway font-semibold">
          <h3>
            Name: <span className="font-normal"> {coffee.name}</span>{" "}
          </h3>
          <h3>
            Chef: <span className="font-normal"> {coffee.chef}</span>{" "}
          </h3>
          <h3>
            Category: <span className="font-normal"> {coffee.category}</span>{" "}
          </h3>
        </div>
      </div>
      <div className="flex flex-col flex-1 text-xl gap-4 items-center">
        <div className="tooltip tooltip-right " data-tip=" view ">
          <button className="bg-[#D2B48C] p-2 rounded-lg text-white">
            <Link to={`/coffee/${coffee._id}`}>
              <BsFillEyeFill></BsFillEyeFill>
            </Link>{" "}
          </button>
        </div>

        <div className="tooltip tooltip-right" data-tip="edit">
          <button className="bg-[#3C393B] p-2 rounded-lg text-white">
            <Link to={`/update/${coffee._id}`} >
              <MdModeEdit></MdModeEdit>
            </Link>
          </button>
        </div>

        <div className="tooltip tooltip-right" data-tip="delete">
          <button
            onClick={() => deleteCoffee(coffee._id)}
            className="bg-[#EA4744] p-2 rounded-lg text-white"
          >
            {" "}
            <MdDelete></MdDelete>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  coffee: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default Coffee;
