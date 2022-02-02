import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from "../Images/photo icon.png"
import profileIcon from "../Images/profile icon.png"
import localStore from "../Images/local storage.png"
import upload from "../Images/upload icon.png"
import notification from "../Images/notification icon.png"
import notify from '../Images/Notifications.png'
import '../Style/Notification.css'
function Notifications() {

return <div className='container'>
   
  <img src={notify} alt="" className='img'/>
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
     
  </div>;
}
export default Notifications;

