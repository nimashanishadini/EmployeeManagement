import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const NavBar = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate(); 
  const [isHovered, setIsHovered] = useState(null);


  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#071C35FF", color: "white" }}>
      {/* Welcome message */}
      <div style={{fontSize:"20px"}}>Welcome {user ? user.name : "Admin"}</div>

      {/* Logout Button */}
      <button
        style={{
          ...buttonStyle,
          backgroundColor: isHovered === 5 ? "#38b2ac" : "transparent",
        }}
        onClick={() => navigate("/login")} 
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
      >
        <FaSignOutAlt style={{ marginRight: "10px" }} /> Logout
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  transition: "background-color 0.3s, color 0.3s",
};

export default NavBar;
