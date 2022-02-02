
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./Components/Onboarding";
import Home from "./Components/Home";
import Localstorage from "./Components/Localstorage";
import Upload from "./Components/Upload";
import Notifications from "./Components/Notifications";
import Profiles from "./Components/Profiles";
import Profile from "./Components/Profile";
import Storagemanagement from "./Components/Storagemanagement";
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
       
    <BrowserRouter>
    <Navbar/>
      <Routes>
     
        <Route exact path="/" element={<Onboarding />}/>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/localstorage" element={<Localstorage />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/notifications" element={<Notifications/>} />
          <Route exact  path="/profiles" element={<Profiles/>} />
          <Route exact  path="/profile" element={<Profile/>} />
          <Route exact path="/storagemanagement" element={<Storagemanagement/>} />
        
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
