import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import UserForm from "./UserForm";
import { ThemeContext } from "../context/ThemeContext";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Access theme context
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user, index) => {
          const nameParts = user.name.split(" ");
          return {
            id: 1 + index, 
            firstName: nameParts[0],
            lastName: nameParts[1] || "",
            email: user.email,
            department: user.company.name,
          };
        });
        setUsers(users);
      })
      .catch((error) => console.error(error));
  }, []);

  const getNextId = () => {
    const maxId = users.length > 0 ? Math.max(...users.map((u) => u.id)) : 10;
    return maxId + 1;
  };

  const handleSaveUser = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === user.id ? { ...u, ...user } : u)));
    } else {
      const newUser = { ...user, id: getNextId() }; // Assign next ID
      setUsers([...users, newUser]);
    }
    setPopupOpen(false);
    setEditingUser(null);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setPopupOpen(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setPopupOpen(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className={`user-list ${theme}`}>
      <h1>USER DATA</h1>
      <button className="add-btn" onClick={handleAddUser}>
        Add User
      </button>
      <table className={`user-table ${theme}`}>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>DEPARTMENT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button
                  className={`edit-btn ${theme}`}
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className={`delete-btn ${theme}`}
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
        <div className="popup-form-container">
          <UserForm onSave={handleSaveUser} userToEdit={editingUser} />
        </div>
      </Popup>
    </div>
  );
};

export default UserList;
