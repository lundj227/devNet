// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/SignUp";
import Chat from "./components/chat";  // Import the chat component correctly

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />  {/* Correct chat route */}
      </Routes>
    </Router>
  );
}

export default App;
