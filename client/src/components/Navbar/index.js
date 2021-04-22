import React from "react";
import { AppBar, Typography, makeStyles } from "@material-ui/core";
import logo from "../../img/2u-logo.original.png";

const useStyles = makeStyles((theme) => ({
   container: {
      padding: "0.75rem",
      textAlign: "left",
   },
   logo: {
      maxWidth: "3rem",
      marginRight: "1.5rem",
      verticalAlign: "middle",
   },
   title: {
      font: "Lato",
      fontWeight: "lighter",
      fontSize: "1.5rem",
      color: "white",
   },
}));

const AppNavbar = () => {
   const classes = useStyles();
   return (
      <AppBar position="static" style={{ background: "#222222" }}>
         <div className={classes.container}>
            <Typography className={classes.title}>
               <img alt="logo" src={logo} className={classes.logo} />
               Instructional L&D
            </Typography>
         </div>
      </AppBar>
   );
};

export default AppNavbar;
