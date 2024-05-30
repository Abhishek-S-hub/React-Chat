import React from "react";
import Add from "../img/addAvatar.jpg";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Online Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button class="Btn2">Sign In</button>
        </form>
        <p>Don't have an Account? Register</p>
      </div>
    </div>
  );
};

export default Login;
