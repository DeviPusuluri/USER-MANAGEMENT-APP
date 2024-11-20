import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>USER MANAGEMENT APPLICATION</h1>
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#555"
        offColor="#ddd"
        handleDiameter={20}
        height={24}
        width={48}
      />
    </header>
  );
};

export default Header;
