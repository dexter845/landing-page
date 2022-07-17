
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Header from "./components/Header.js";
import Community from "./components/Community.js";
import Register from "./components/Register.js";
import Contact from "./components/Contact.js"


function App(){
  return( 
      <div className="bg_gradient">
          <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/community" element={<Community/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/contact" element={<Contact/>}/>


            </Routes>  
          </Router>
      </div> 
  )
}


export default App;