import {BsFillEyeFill} from 'react-icons/bs'
import {MdModeEdit,MdDelete} from 'react-icons/md'

import PropTypes from "prop-types";

const Coffee = ({ coffee }) => {
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
        <button className='bg-[#D2B48C] p-2 rounded-lg text-white'> <BsFillEyeFill></BsFillEyeFill> </button>
        <button className='bg-[#3C393B] p-2 rounded-lg text-white'> <MdModeEdit></MdModeEdit> </button>
        <button className='bg-[#EA4744] p-2 rounded-lg text-white'> <MdDelete></MdDelete> </button>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  coffee: PropTypes.object,
};

export default Coffee;
