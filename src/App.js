import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {useState} from "react"
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return(
    <div className="flex flex-col bg-richblack-900 w-[100vw] h-[100vh]">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/dashboard" element={ <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
