// src/components/Login.jsx
import { useState } from "react";
import styles from "../styles/login.module.css"; // Import as CSS Module
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FaTimes } from "react-icons/fa"; // Import the FaTimes icon

function Login() {
  const [identifier, setIdentifier] = useState(""); // Using identifier for username/email/phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple regex checks for email and phone number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isPhone = /^\d{10,}$/.test(identifier); // For phone numbers with at least 10 digits
    const isUsername = !isEmail && !isPhone; // If it's not email or phone, it's a username

    if (!identifier || !password) {
      setError("Both fields are required");
    } else if (!isUsername && !isEmail && !isPhone) {
      setError("Please enter a valid email, phone number, or username");
    } else {
      setError(""); // Reset error
      // Handle form submission, e.g., send data to API
      console.log("Identifier:", identifier);
      console.log("Password:", password);
      // Redirect to homepage after successful login
      navigate("/"); // Adjust the path if your homepage is different
    }
  };

  const handleClose = () => {
    navigate("/"); // Navigate back to the homepage
  };

  const handleSubmitRoute = () => {
    navigate("/home");
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
          <button
            type="submit"
            className={styles["login-button"]}
            onClick={handleSubmitRoute}
          >
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
