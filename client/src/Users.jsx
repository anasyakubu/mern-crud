import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([
    {
      name: "Anas Yakubu",
      email: "yakubuanas04@gmail.com",
      age: 20,
    },
    {
      name: "Abbas Yakubu",
      email: "yakubuabbas04@gmail.com",
      age: 20,
    },
  ]);

  useEffect(() => {
    axios
      .get("https://mern-crud-sh3a.onrender.com")
      .then((result) => {
        setUsers(result.data);
        // console.log(result.data);
      })
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios
      .delete("https://mern-crud-sh3a.onrender.com/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

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
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
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
