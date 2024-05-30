import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="search for a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>Kashish</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
