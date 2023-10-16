import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();

  return (
    <div>
      <h3 className="text-center font-semibold underline text-4xl mt-12">
        Users List
      </h3>
      <div className="max-w-[82.5rem] mx-auto my-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-raleway text-base" >
                <th></th>
                <th>Email</th>
                <th>UID</th>
                <th>Last Log in</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {loadedUsers.map((user, idx) => (
                <tr key={user._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{user.email}</td>
                  <td>{user._id}</td>
                  <td></td>
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
