import React, { useEffect, useState } from "react";
import fb from "../Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);

   useEffect(() => {
      fb.auth().onAuthStateChanged(setCurrentUser);
      fb.auth().setPersistence("session");
   }, []);

   return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
