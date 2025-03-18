import React, { useState } from "react"; // Add useState import
import { useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaCalendarAlt, FaMoneyBillAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(null); // Fix: useState hook

  // Function to handle mouse enter and leave for hover effects
  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#071C35FF", // Blue background
        color: "white", // White text
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <div style={{ color: "#fff" }}>
        {/* Employee Management System */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <h2>Employee Management <span style={{marginLeft:"75px"}}>System</span></h2>
        </div>

        {/* Welcome message */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h3>Welcome, Admin</h3>
        </div>
      </div>

      {/* Sidebar Menu Buttons */}
      <button
        style={{
          ...buttonStyle,
          backgroundColor: isHovered === 0 ? "#38b2ac" : "transparent",
        }}
        onClick={() => navigate("/admin-dashboard")}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <FaHome style={{ marginRight: "10px" }} /> Dashboard
      </button>

      <button
        style={{
          ...buttonStyle,
          backgroundColor: isHovered === 1 ? "#38b2ac" : "transparent",
        }}
        onClick={() => navigate("/employee")}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <FaUsers style={{ marginRight: "10px" }} /> Employees
      </button>

      <button
        style={{
          ...buttonStyle,
          backgroundColor: isHovered === 2 ? "#38b2ac" : "transparent",
        }}
        onClick={() => navigate("/leaves")}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <FaCalendarAlt style={{ marginRight: "10px" }} /> Leaves
      </button>

      <button
        style={{
          ...buttonStyle,
          backgroundColor: isHovered === 3 ? "#38b2ac" : "transparent",
        }}
        onClick={() => navigate("/salary")}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <FaMoneyBillAlt style={{ marginRight: "10px" }} /> Salary
      </button>

      <button
        style={{
          ...buttonStyle,
          backgroundColor: isHovered === 4 ? "#38b2ac" : "transparent",
        }}
        onClick={() => navigate("/settings")}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <FaCog style={{ marginRight: "10px" }} /> Settings
      </button>

      {/* Logout Button */}
      
    </div>
  );
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  transition: "background-color 0.3s, color 0.3s",
};

export default AdminSideBar;
