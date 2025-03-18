import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminSideBar from "../components/AdminSideBar";



const AdminDashboard =() =>{
    const {user} = useAuth()
  

    return(
        <div>
            <AdminSideBar/>
        </div>
    )
}

export default AdminDashboard 