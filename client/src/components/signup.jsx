import "../styles/Signup.css"

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!firstName || !lastName) {
            setErrorMessage('First and last names are required.');
            return;
        }

        if (!validateEmail(email)) {
          setErrorMessage('Please enter a valid email.');
          return;
        }
        
        if (!username) {
            setErrorMessage('Username is required.');
            return;
        }

        if (password.length < 6) {
          setErrorMessage('Password must be at least 6 characters long.');
          return;
        }
        
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
          }
      
        setErrorMessage('');
        alert('Account created successfully!');
      
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <div className="signupContainer">
            <div className="main">
                <h4 className="heading">DevNet</h4>
                <h1>Welcome to the Network!</h1>
                <div className="signupBox">
                    <form onSubmit={handleSubmit}>
                        <div className="fullName">
                            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} required/>

                            <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                        <div className="telEmail">
                            <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>

                            <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} required/>

                            <input type="password" placeholder="Password" value ={password} onChange={(e) => setPassword(e.target.value)} required/>

                            <input type="password" placeholder="Confirm Password" value ={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <button type = "submit">Create Account</button>
                    </form>
                    {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                </div>
                <p>Already have an account? Log in!</p>
            </div>
        </div>
    );
}

export default Signup;