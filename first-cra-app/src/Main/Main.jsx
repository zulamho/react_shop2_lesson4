import React from "react";
import Products from "./Products";
import Sidebar from "../Sidebar/Sidebar";

function Main(props) {
  return (
    <div className="main">
      <Sidebar />
      <Products />;
    </div>
  );
}

export default Main;
