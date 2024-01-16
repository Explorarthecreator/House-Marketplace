import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Offers from './Pages/Offers'
import Explore from './Pages/Explore'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/profile" element={<SignIn/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
        {/* Navbar */}
        <Navbar/>
      </Router>
      
    </>
  );
}

export default App;
