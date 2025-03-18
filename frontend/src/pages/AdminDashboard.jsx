import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminSideBar from "../components/AdminSideBar";
import NavBar from "../components/NavBar";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: "300px",  minHeight: "100vh" }}>
        <NavBar />
      </div>
    </div>
  );
};

export default AdminDashboard;
