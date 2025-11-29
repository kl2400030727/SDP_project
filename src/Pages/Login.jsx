import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/lms.png";

import "./Login.css";

function detectRole(username) {
  if (/^\d{10}$/.test(username)) return "student";
  if (/^\d{4}$/.test(username)) return "instructor";
  if (/^ADM/i.test(username)) return "admin";
  if (/^CC/i.test(username)) return "creator";
  return null;
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const role = detectRole(username);

    if (!role) {
      alert("❌ Invalid username format!");
      return;
    }

    if (password.trim() === "") {
      alert("⚠️ Please enter your password!");
      return;
    }

    localStorage.setItem("userRole", role);
    localStorage.setItem("username", username);

    navigate("/portal");
  };

  const handleForgotPassword = () => {
    alert("Please contact your administrator to reset your password.");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="app-container">
      <header className="title-bar">
        <div className="title-content">
          <h1>Learning Management System</h1>
        </div>
      </header>

      <div className="login-container">
        {/* LEFT IMAGE */}
        <div className="side-illustration">
          <img src={illustration} alt="LMS illustration" />
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="login-card">
          <h2>Login to Your Account</h2>
          <h3>Enter your credentials</h3>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              style={{
                textAlign: "right",
                marginBottom: "18px",
                marginTop: "-10px",
              }}
            >
              <a
                href="#forgot-password"
                onClick={handleForgotPassword}
                style={{
                  fontSize: "14px",
                  color: "#3f51b5",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </a>
            </div>
            <button type="submit">Login</button>
          </form>

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              paddingTop: "20px",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              Don't have an account?
            </p>
            <a
              href="#register"
              onClick={handleRegister}
              style={{
                fontSize: "14px",
                color: "#3f51b5",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Register
            </a>
          </div>
        </div>
      </div>

      <footer className="logout-bar">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#help">Help & Support</a>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer-info">
            <span>© 2024 Learning Management System. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
