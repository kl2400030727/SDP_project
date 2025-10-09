import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    // Redirect to portal instead of role-specific pages
    navigate("/portal");
  };

  const handleForgotPassword = () => {
    alert("Please contact your administrator to reset your password.");
  };

  return (
    <div className="app-container">
      {/* Title Bar at Top */}
      <header className="title-bar">
        <div className="title-content">
          <h1>Learning Management System</h1>
        </div>
      </header>

      {/* Main Login Content */}
      <div className="login-container">
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
                marginTop: "-10px" 
              }}
            >
              <a 
                href="#forgot-password" 
                onClick={handleForgotPassword}
                style={{
                  fontSize: "14px",
                  color: "#3f51b5",
                  textDecoration: "none",
                  cursor: "pointer"
                }}
              >
                Forgot Password?
              </a>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/* Logout Bar at Bottom */}
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