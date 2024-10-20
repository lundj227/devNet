import { useState } from "react";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="signupContainer">
      <div className="main">
        <h4 className="heading">DevNet</h4>
        <h1>Welcome to the Network!</h1>
        <div className="signupBox">
          <form>
            <div className="fullName">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="telEmail">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
            </div>
          </form>
          <Link to="/home">
            <button type="submit">Create Account</button>
          </Link>
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
