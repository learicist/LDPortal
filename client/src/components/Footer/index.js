import React from "react";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import "./index.css";

function Copyright() {
   return (
      <p>
         {"Copyright © "}
         <Link color="inherit" href="https://www.trilogyed.com/">
            Trilogy Edycation Services
         </Link>
         , a 2U, Inc. brand. All rights reserved {new Date().getFullYear()}
         {"."}
      </p>
   );
}

const Footer = () => {
   return (
      <Box class="footer">
         <Copyright />
      </Box>
   );
};

export default Footer;
