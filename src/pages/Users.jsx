import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();

  return (
    <div className="max-w-[82.5rem] mx-auto">
      <h3 className="text-center  font-semibold underline text-4xl mt-12">
        Users List
      </h3>
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
      <div className=" my-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-raleway text-base">
                <th></th>
                <th>Email</th>
                <th>UID</th>
                <th>Last Signed In</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {loadedUsers.map((user, idx) => (
                <tr key={user._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{user.email}</td>
                  <td>{user._id}</td>
                  <td>
                    {user?.lastLoggedIn ? user?.lastLoggedIn : "not available"}
                  </td>
                  <td className="space-x-3">
                    <button className="btn btn-sm btn-neutral">Edit</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
