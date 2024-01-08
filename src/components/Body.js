import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const themes = useSelector((store) => store.theme.isTheme);
  return (
    <div className={"flex " + (themes && "bg-black text-white")}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
