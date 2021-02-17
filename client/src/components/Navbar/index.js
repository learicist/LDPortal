import React, { useContext } from "react";
import { AppBar, Button, Typography } from "@material-ui/core";
import logo from "../../img/Trilogy_T_Logo.png";
import fb from "../Firebase";
import { AuthContext } from "../Auth/Context";
import "./index.css";

const AppNavbar = () => {
   const { currentUser } = useContext(AuthContext);

   if (currentUser) {
      return (
         <AppBar className="navContainer" title={<img alt="logo" src={logo} />}>
            <Button id="signout-btn" onClick={() => fb.auth().signOut()}>
               Sign Out
            </Button>
         </AppBar>
      );
   } else {
      return (
         <AppBar position="static" color="transparent">
            <div className="navContainer">
               <img alt="logo" src={logo} className="navbarLogo" />
               <span className="navbarTitle">Instructional L&D</span>
            </div>
         </AppBar>
      );
   }
};

export default AppNavbar;
