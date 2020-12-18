import React, { useContext } from "react";
import { AppBar, Button } from "@material-ui/core";
import logo from "../../img/trilogy_logo2.png";
import fb from "../Firebase";
import { AuthContext } from "../Auth/Context";

const AppNavbar = () => {
   const { currentUser } = useContext(AuthContext);

   if (currentUser) {
      return (
         <AppBar title={<img alt="logo" src={logo} />}>
            <Button id="signout-btn" onClick={() => fb.auth().signOut()}>
               Sign Out
            </Button>
         </AppBar>
      );
   } else {
      return <AppBar title={<img alt="logo" src={logo} />}></AppBar>;
   }
};

export default AppNavbar;
