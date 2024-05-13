import { useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([
    {
      Name: "Anas Yakubu",
      Email: "yakubuanas04@gmail.com",
      Age: 20,
    },
    {
      Name: "Abbas Yakubu",
      Email: "yakubuabbas04@gmail.com",
      Age: 20,
    },
  ]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add (+)
        </Link>
        <table className="table mt-5">
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.Email}>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <Link to="/update" className="btn btn-success">
                      Edit
                    </Link>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
