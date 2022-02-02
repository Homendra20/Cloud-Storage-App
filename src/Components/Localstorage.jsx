import React, {useState , useEffect}from 'react';
import { NavLink } from 'react-router-dom';
import photo from "../Images/photo icon.png"
import profileIcon from "../Images/profile icon.png"
import localStore from "../Images/local storage.png"
import upload from "../Images/upload icon.png"
import notification from "../Images/notification icon.png"
import background from '../Images/bglink.png'
import gallery from '../Images/gallery.png'
import Music from '../Images/music.png'
import key from '../Images/key.png'
import '../Style/Localstorage.css'
import axios from 'axios';

function Localstorage() {
  const [local, setlocal] = useState([]);
  const [searchEmp,setSearchEmp]=useState("");

  const load = async  ()=>{
    const result = await axios.get("http://localhost:3002/local");
    setlocal(result.data)
}
useEffect(()=>{
 load()
 },[]);

 const searchEmployee = (e)=>{
  setSearchEmp(e.target.value)
}

return <div className='container'>
 <div className='statusBarbg'>
  <div className='statusbar'>
9:41
  </div>
  <h1 id='local'>Local Storage  </h1>
   </div>

       <div className='searchh'>
      <input type="search" name="search" id="search" autoComplete='off' placeholder="search here" value={searchEmp} onChange={searchEmployee} />
 </div>
 <div style={{ marginTop: "5px", display: "flex",justifyContent:"center",marginRight:"40px"}} >
      <span style={{ flexDirection: "column", width: "50px", padding: "20px", margin: "20px" }}>
        <img src={background} />
        <b>Video</b>
      </span>
      <span style={{ width: "50px", margin: "20px", padding: "20px" }}>
        <img src={gallery} />
        <b>Image</b>
      </span>
      <span style={{ width: "50px", margin: "20px", padding: "20px" }}>
        <img src={Music} />
        <b>  Music</b>
      </span>
      <span style={{ width: "50px", margin: "20px", padding: "20px" }}>
        <img src={key} />
        <b>Archive</b>
      </span>
    </div>
<div>
  {
    local.filter((value)=>{
 if(value.title === ""){
    return true;
 }
 else if (value.title?.toLowerCase().includes(searchEmp?.toLowerCase()) || value.data?.toLowerCase().includes(searchEmp?.toLowerCase())){
     return true;
}
  })  .map((names,index)=>{
      return <div className='local-data'>
      <h1>{names.title}</h1>
    
{/*      
      <p>{names.data}</p> */}
      </div>
      })
  }
  <div className='container-fluid fixed bottom-0 pb-2'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          
     <NavLink className='p-3 w-150 h-100'exact to="/profiles">{<img src={profileIcon} alt="" />}</NavLink>
        <NavLink className='p-3 w-150 h-100'exact to="/localstorage">{<img src={localStore} alt="" />}</NavLink>
      <NavLink className='p-3 w-150 h-100'exact to="/upload">{<img src={upload} alt="" />}</NavLink>
      <NavLink className='p-3 w-150 h-100'exact to="/notifications">{<img src={notification} alt="" />}</NavLink>
      <NavLink className='p-3 w-150 h-100'exact to="/profile">{<img src={photo} alt="" />}</NavLink>
        </div>
        </div>
        </div>
  </div>
    
 </div> 
 }
export default Localstorage;

