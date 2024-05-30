import React from "react";
import Attach from "../img/fileattach2.png";
import Img from "../img/img3.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file" style={{ height: "30px" }}>
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
