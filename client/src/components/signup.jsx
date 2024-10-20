import { useState } from "react";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:8080/users/signup", {
        firstName,
        lastName,
        email,
        username,
        password,
      });

      if (response.data.success) {
        console.log("User created successfully:", response.data.data);
        // Redirect to login page or home page after successful signup
        navigate("/login");
      } else {
        setErrorMessage(
          response.data.message || "Signup failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Signup error:", error.response?.data);
      setErrorMessage(
        error.response?.data?.message || "An error occurred during signup."
      );
    }
  };

  return (
    <div className="signupContainer">
      <div className="main">
        <h4 className="heading">DevNet</h4>
        <h1>Welcome to the Network!</h1>
        <div className="signupBox">
          <form onSubmit={handleSubmit}>
            <div className="fullName">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="telEmail">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit">Create Account</button>
          </form>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <button>Log in!</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
