import {
  Navbar,
  Home,
  About,
  Teacher,
  Courses,
  Contact,
  Footer,
  Login,
  Signup
} from "./component/index";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./firebase"; 
import { useEffect, useState } from "react";
import SCal from "./component/Dummy/SCal"
import TCal from "./component/Dummy/TCal"

function App() {

  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [role,setRole]=useState("");
  const [allEvents, setAllEvents] = useState([{}]);



  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setIsAuthenticated(true);
        setRole(user.displayName);
      }else{
        setIsAuthenticated(false);
        setRole("");
      }
    })
  },[])
  return (
  <div className="font-Poppins bg-Solitude">
    <Router>
          <Navbar isAuthenticated={isAuthenticated}/>
        <Routes>
          <Route path="/" element={
            <>
          <Home role={role}/>
          <About />
          <Courses />
          <Teacher isAuthenticated={isAuthenticated} role={role}/>
          <Contact />
        </>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/scal" element={<SCal allEvents={allEvents}/>}/>
        <Route path="/tcal" element={<TCal allEvents={allEvents} setAllEvents={setAllEvents}/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      <Footer />
    </Router>
    
  </div>

  )
}

export default App;
