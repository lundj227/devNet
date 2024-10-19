import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landingContainer">
      <div className="header">
        <h4>DevNet</h4>
        <ul>
          <li>
            <button>Log In</button>
          </li>
          <li>
            <button className="signUpButton">Sign Up</button>
          </li>
        </ul>
      </div>
      <div className="hero">
        <h1 className="heroMainText">Welcome to DevNet</h1>
        <p className="heroSubText">The Networkers Network</p>
        <div className="cards">
          <div className="card">1</div>
          <div className="card">2</div>
          <div className="card">3</div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
