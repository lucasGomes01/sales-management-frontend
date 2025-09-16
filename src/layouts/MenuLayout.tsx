import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <div className="flex-1 p-4">
        {!isOpen && (
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        )}
        {children}
      </div>
    </div>
  );
}
