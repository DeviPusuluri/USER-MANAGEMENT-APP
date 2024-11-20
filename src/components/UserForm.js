import React, { useState, useEffect } from "react";
import "./UserList.css";
const UserForm = ({ onSave, userToEdit }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit); // Populate form if editing an existing user
    } else {
      setUser({ firstName: "", lastName: "", email: "", department: "" });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user); // Save user data
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
        <label for="firstname"> FIRST NAME</label>
        <br/>
      <input
        type="text"
        id="firstname"
        name="firstName"
        className="input"
        placeholder="First Name"
        value={user.firstName}
        onChange={handleChange}
        required
      />
      <br/>
      <label for="lastname"> LAST NAME</label>
      <br/>
      <input
        type="text"
        id="lastname"
        name="lastName"
        className="input"
        placeholder="Last Name"
        value={user.lastName}
        onChange={handleChange}
        required
      />
<br/>
<label for="email"> EMAIL</label>
<br/>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="input"
        value={user.email}
        onChange={handleChange}
        required
      />
<br/>
<label for="department"> DEPARTMENT</label>
<br/>
      <input
        type="text"
        id="department"
        name="department"
        className="input"
        placeholder="Department"
        value={user.department}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
