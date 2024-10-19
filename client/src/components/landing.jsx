import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landingContainer">
      <div className="header">
        <h4>DevNet</h4>
        <ul>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="hero">
        <h1 className="heroMainText">Welcome to DevNet</h1>
        <p>The Networkers Network</p>
      </div>
    </div>
  );
}
export default Landing;
