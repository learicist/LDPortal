import React from "react";
import { AppBar } from "@material-ui/core";
import logo from "../../img/Trilogy_T_Logo.png";
import "./index.css";

const AppNavbar = () => {
   return (
      <AppBar position="static" color="transparent">
         <div className="navContainer">
            <img alt="logo" src={logo} className="navbarLogo" />
            <span className="navbarTitle">Instructional L&D</span>
         </div>
      </AppBar>
   );
};

export default AppNavbar;
