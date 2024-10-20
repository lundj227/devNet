// Home.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/homepage.css";
import {
  FaHome,
  FaSearch,
  FaPlusCircle,
  FaUserCircle,
  FaComments,
  FaBell,
  FaTimes,
} from "react-icons/fa";
import axios from "axios"; // Import Axios at the top

function Home() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to hold form data
  const [postContent, setPostContent] = useState("");
  const [postFile, setPostFile] = useState(null);

  const [firstName, setFirstName] = useState("John");
  const navigate = useNavigate();

  // Add posts to your state
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.firstName) {
      setFirstName(user.firstName);
    } else {
      // If no user data, redirect to login page
      navigate("/login");
    }

    // Fetch posts from backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/posts");
        if (response.data.success) {
          setPosts(response.data.data);
        } else {
          console.error("Error fetching posts:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [navigate]);

  // Function to handle modal open
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    setPostContent("");
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      // If no user data, redirect to login page
      navigate("/login");
      return;
    }

    // Prepare the post data
    const postData = {
      userName: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      body: postContent,
    };

    try {
      // Send POST request to backend
      const response = await axios.post(
        "http://localhost:8080/posts",
        postData
      );

      if (response.data.success) {
        // Add the new post to the posts array
        setPosts([response.data.data, ...posts]);

        // Reset the post content and close the modal
        setPostContent("");
        closeModal();
      } else {
        console.error("Error creating post:", response.data.message);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="homePageContainer">
      {/* Navigation Bar */}
      <header className="homeHeader">
        <div className="homeNavIconGroup leftIcons">
          <FaHome className="homeNavIcon active" />
          <FaSearch className="homeNavIcon" />
          <FaComments className="homeNavIcon" />
        </div>
        <div className="homeLogo">
          <Link to="/">DevNet</Link>
        </div>
        <div className="homeNavIconGroup rightIcons">
          <FaBell className="homeNavIcon" />
          <FaUserCircle className="homeNavIcon" />
        </div>
      </header>
      {/* Main Content */}
      <main className="homeMainContent">
        <div className="homeFeed">
          {/* Render Posts Dynamically */}
          {posts.map((post) => (
            <div className="homePostCard" key={post._id}>
              <div className="homePostHeader">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User Avatar"
                  className="homeAvatar"
                />
                <div className="homePostUserInfo">
                  <strong>
                    {post.firstName} {post.lastName}
                  </strong>
                  <span>@{post.userName}</span>
                </div>
              </div>
              <p className="homePostContent">{post.body}</p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="homeSidebar">
          <div className="homeSidebarSection">
            <h2>Trends for you</h2>
            <ul>
              <li>
                <Link to="/trend/reactjs">#ReactJS</Link>
              </li>
              <li>
                <Link to="/trend/devnet">#DevNet</Link>
              </li>
              <li>
                <Link to="/trend/opensource">#OpenSource</Link>
              </li>
            </ul>
          </div>
          <div className="homeSidebarSection">
            <h2>Who to follow</h2>
            <ul>
              <li>
                <Link to="/profile/janedoe">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Jane Doe"
                    className="homeAvatarSmall"
                  />
                  Jane Doe
                </Link>
              </li>
              <li>
                <Link to="/profile/bobjones">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Bob Jones"
                    className="homeAvatarSmall"
                  />
                  Bob Jones
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </main>
      {/* Floating Action Button */}
      <button className="homeFab" onClick={openModal} aria-label="Create Post">
        <FaPlusCircle />
      </button>
      {/* Modal for Creating a Post */}
      {isModalOpen && (
        <div className="homeModalOverlay">
          <div className="homeModal">
            <button
              className="homeModalClose"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <FaTimes />
            </button>
            <h2>Create a Post</h2>
            <form onSubmit={handlePostSubmit} className="homePostForm">
              <textarea
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="homePostTextarea"
                required
              ></textarea>
              <button type="submit" className="homePostSubmitButton">
                Post
              </button>
            </form>
          </div>
        </div>
      )}
      <h1 className="homeFirstName">Welcome, {firstName}!</h1>
    </div>
  );
}

export default Home;
