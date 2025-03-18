import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        
        // Navigate based on role
        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/employee");
        }
      }
    } catch (error) {
      if (error.response && error.response.data && !error.response.data.success) {
        setError(error.response.data.error || "Invalid credentials. Please try again.");
      } else {
        setError("Server Error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #071C35FF 50%, #FFFFFFFF 50%)",
      }}
    >
      <h1
        style={{
          fontFamily: "'Cursive', sans-serif",
          fontSize: "24px",
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        <span style={{ color: "#fff" }}>Employee</span>{" "}
        <span
          style={{
            color: "#007acc",
            background: "#fff",
            padding: "0 5px",
            borderRadius: "5px",
          }}
        >
          Management
        </span>{" "}
        <span style={{ color: "#fff" }}>System</span>
      </h1>

      <div
        style={{
          width: "350px",
          backgroundColor: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
          Login
        </h2>

        {error && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              textAlign: "center",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold" }}>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "90%",
              padding: "10px",
              margin: "5px 0 15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />

          <label style={{ fontWeight: "bold" }}>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "90%",
              padding: "10px",
              margin: "5px 0 15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <label>
              <input type="checkbox" style={{ marginRight: "5px" }} /> Remember me
            </label>
            <a href="#" style={{ color: "#008080", textDecoration: "none" }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "15px",
              backgroundColor: loading ? "#ccc" : "#008080",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
