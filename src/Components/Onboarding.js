import React from 'react';
import web from "../Images/onboarding.png"
import web1 from "../Images/onbording Icon.png"
import '../Style/onboarding.css'
import { NavLink } from 'react-router-dom';

function Onboarding() {
    return <div className='container'>
      <img src={web} alt="onboard-img" srcset="" className='img'  />
      <div className='copy-color'>
      <h2 id='h2'>Your cloud storage
safe and sound </h2>
</div>
<div>
<NavLink className="nav-link"exact to="/home">{<img src={web1} alt="onboard-img" srcset="" className="img-2"  />}</NavLink>
     </div>
</div>;
}
export default Onboarding;
