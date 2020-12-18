import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import LDHome from "../LDHome";
import fb from "../Firebase";
import { AuthContext } from "./Context";

const Login = ({ history }) => {
   const handleLogin = useCallback(
      async (event) => {
         event.preventDefault();
         const { email, password } = event.target.elements;
         try {
            await fb.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
         } catch (error) {
            alert(error);
         }
      },
      [history]
   );

   const { currentUser } = useContext(AuthContext);

   if (currentUser) {
      return <LDHome />;
   }

   return (
      <div className="container main">
         <div className="row">
            <div className="col s12 m6 offset-m3">
               <div className="card light-blue lighten-5">
                  <div className="card-content center-align">
                     <p className="card-title">Log In</p>
                     <form id="form" onSubmit={handleLogin}>
                        <div className="row">
                           <p>Please login with the email associated with your account and the password provided</p>
                        </div>
                        <div className="row">
                           <div className="input-field col s12">
                              <input id="email" type="email" className="validate" />
                              <label htmlFor="email">Email</label>
                           </div>
                        </div>
                        <div className="row">
                           <div className="input-field col s12">
                              <input id="password" type="password" className="validate" />
                              <label htmlFor="password">Password</label>
                           </div>
                        </div>
                        <div className="card-action center-align">
                           <button id="submit" className="btn light-blue lighten-1 waves-effect waves-light" type="submit" name="action">
                              Submit
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default withRouter(Login);
