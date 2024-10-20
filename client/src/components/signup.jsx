import "../styles/Signup.css"

function Signup() {
    
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
                        <input type="email" placeholder="Email" required/>
                        <input type="text" placeholder="Username" required/>
                        <input type="password" placeholder="Password" required/>
                        </div>
                    </form>
                    <button type = "submit">Create Account</button>
                </div>
                <p>Already have an account? Log in!</p>
            </div>
        </div>
    )
}
export default Signup;