import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-11"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg"
        />
        <img
          className="h-11 mx-2"
          alt="youtube-logo"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>
      <div className="col-span-10 px-32">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-4 py-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-11"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Head;
