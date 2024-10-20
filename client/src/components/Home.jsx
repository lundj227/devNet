// Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

function Home() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to hold form data
  const [postContent, setPostContent] = useState("");
  const [postFile, setPostFile] = useState(null);

  // Function to handle modal open
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    setPostContent("");
    setPostFile(null);
  };

  // Function to handle form submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // For example, send the data to your backend API
    console.log("Post Content:", postContent);
    console.log("Post File:", postFile);

    // Close the modal after submission
    closeModal();
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    setPostFile(e.target.files[0]);
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
          {/* Example Post */}
          <div className="homePostCard">
            <div className="homePostHeader">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="homeAvatar"
              />
              <div className="homePostUserInfo">
                <strong>John Doe</strong>
                <span>@johndoe</span>
              </div>
            </div>
            <p className="homePostContent">
              Just finished working on a new project! Check it out and let me
              know what you think.
            </p>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Post"
              className="homePostImage"
            />
            <div className="homePostActions">{/* Add action icons here */}</div>
          </div>
          {/* Add more posts as needed */}
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
              <label htmlFor="postFile" className="homeFileLabel">
                Upload a file (image or zip)
              </label>
              <input
                type="file"
                id="postFile"
                accept=".jpg,.jpeg,.png,.gif,.zip"
                onChange={handleFileChange}
                className="homeFileInput"
              />
              <button type="submit" className="homePostSubmitButton">
                Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
