import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Online Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>Kashish</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
