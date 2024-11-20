import React, { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // Handles editing a user
  const handleEdit = (user) => setSelectedUser(user);

  // Handles saving a user
  const handleSave = (user) => {
    console.log("Save User:", user); // Replace with API call for saving user
    setSelectedUser(null);
  };

  return (
    <ThemeProvider>
      <Header />
      <main>
        {/* Pass handlers to UserList */}
        <UserList
          onEdit={handleEdit}
          onDelete={(id) => console.log("Delete User:", id)}
        />
        {/* Show UserForm when a user is selected */}
        {selectedUser && (
          <UserForm userToEdit={selectedUser} onSave={handleSave} />
        )}
      </main>
    </ThemeProvider>
  );
};

export default App;
