import React from "react";
import "../Styles/navbar_style.css";
import Logosite from "./Logosite";
import InputSearch from "./InputSearch";
import Iconenavabar from "./Iconenavabar";

function NavBar() {
  return (
    <div className="navbar">
      <Logosite />
      <InputSearch />

      <Iconenavabar />
    </div>
  );
}

export default NavBar;
