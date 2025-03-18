import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Fix: Import navigate

const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login"); // Redirect to login if no token
                    return;
                }

                const response = await axios.get("http://localhost:5000/api/auth/verify", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                console.log(response);

                if (response.data.success) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.log("Error:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        verifyUser();
    }, []); // Fix: Add dependency array to run only on mount

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
        navigate("/login"); // Fix: Redirect to login on logout
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);
export default AuthProvider;
