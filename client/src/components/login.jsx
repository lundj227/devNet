// src/components/Login.jsx
import { useState } from "react";
import styles from "../styles/login.module.css"; // Import as CSS Module
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FaTimes } from "react-icons/fa"; // Import the FaTimes icon
import axios from "axios"; // Import axios

function Login() {
  const [identifier, setIdentifier] = useState(""); // Using identifier for username/email/phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (!identifier || !password) {
      setError("Both fields are required");
    } else {
      setError(""); // Reset error

      try {
        // Send login request to backend
        const response = await axios.post("http://localhost:8080/users/login", {
          identifier,
          password,
        });

        if (response.data.success) {
          // Save user data to localStorage or context
          localStorage.setItem("user", JSON.stringify(response.data.data));
          // Redirect to homepage after successful login
          navigate("/home");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Login error:", error);
        setError(
          error.response?.data?.message || "An error occurred during login"
        );
      }
    }
  };

  const handleClose = () => {
    navigate("/"); // Navigate back to the homepage
  };

  return (
    <div className={`${styles["login-root"]} ${styles["login-container"]}`}>
      <div className={styles["login-box"]}>
        {/* Login Header with Close Button */}
        <div className={styles["login-header"]}>
          <h1 className={styles["login-main-text"]}>Login</h1>
          {/* Close (X) Button with Icon */}
          <button
            className={styles["login-close-button"]}
            onClick={handleClose}
            aria-label="Close Login"
          >
            <FaTimes /> {/* Using the FaTimes icon */}
          </button>
        </div>

        {/* Display Error Message */}
        {error && <p className={styles["login-error"]}>{error}</p>}

        {/* Login Form */}
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
          <div className={styles["login-inputs"]}>
            <input
              type="text"
              id="identifier"
              placeholder="Username, Email, or Phone Number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles["login-button"]}>
            Login
          </button>
        </form>

        {/* Optional: Link to Signup page */}
        {/* <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
