import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <div>
        <ul className="m-3">
          <li className="m-2 hover:bg-gray-200 px-2 rounded-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Shorts</li>
          <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Videos</li>
          <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Live</li>
        </ul>
      </div>
      <h1 className="font-bold pt-5 mb-3">Subscriptions</h1>
      <ul>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Music</li>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Sports</li>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Gaming</li>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Movies</li>
      </ul>
      <h1 className="font-bold pt-5 mb-3">Watch Later</h1>
      <ul>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Music</li>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Sports</li>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Gaming</li>
        <li className="m-2  hover:bg-gray-200 px-2 rounded-lg"> Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
