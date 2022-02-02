import profileIcon from "../Images/profile icon.png"
import localStore from "../Images/local storage.png"
import upload from "../Images/upload icon.png"
import notification from "../Images/notification icon.png"
import photo from "../Images/photo icon.png"
 import "../Style/Home.css"
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import homepage from '../Images/home page.png'
import React, { useState,useEffect } from 'react'

function Home() {
  const [user,setUser]=useState([])
  const [searchEmp,setSearchEmp]=useState("");

   const loaduser = async  ()=>{
     const result = await axios.get("http://localhost:3002/user");
     setUser(result.data)
 }

 useEffect(()=>{
  loaduser()
  },[]);

  const searchEmployee = (e)=>{
    setSearchEmp(e.target.value)
}

return <div className='container'>
  <img src={homepage } alt="" />
<input type="search" className="search" id="search" autoComplete='off' placeholder="search here" value={searchEmp} onChange={searchEmployee} />
 <div className='content'>
 <div className='get-data'>
{
     user.filter((value)=>{
 if(value.title === ""){
    return true;
 }
 else if (value.title?.toLowerCase().includes(searchEmp?.toLowerCase()) || value.data?.toLowerCase().includes(searchEmp?.toLowerCase())){
     return true;
}
  })  .map((names,index)=>{
      return <div className='next-big'>
      <h1 id='title-big'>{names.title}</h1>
    
      {/* <p>{names.card}</p>
      <p>{names.data}</p> */}
      </div>
      })
  }
</div>
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
     </div>;
  }
export default Home;

  

  
 
 
  


 
 
  
   
 
  
  
