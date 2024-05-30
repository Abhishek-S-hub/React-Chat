import React from "react";
import Add from "../img/addAvatar.jpg";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Online Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button class="Btn">Sign Up</button>
        </form>
        <p>Already have an Account? Login</p>
      </div>
    </div>
  );
};

export default Register;
