import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth/Context";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LDSHome from "./components/LDSHome";
import Login from "./components/Auth/Login";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Navbar />
            <Router>
               <Route path="/" component={Login} />
               <ProtectedRoute path="/LDHome" component={LDSHome} />
            </Router>
            <Footer />
         </AuthProvider>
      </div>
   );
}

export default App;
