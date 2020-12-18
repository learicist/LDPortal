import React from "react";

const Footer = () => {
   return (
      <footer>
         <div className="row">
            <div className="col">
               <div>
                  <p>
                     © 2020
                     <a href="https://trilogyed.com" style={{ color: "#32C6E6" }}>
                        {" "}
                        Trilogy Education Services
                     </a>
                     <br />A 2U, Inc. brand - all rights reserved
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
