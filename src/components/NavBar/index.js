import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import Icons from '../../assets/Icons';

import './NavBar.css'

export default function NavBar() {
 let location = useLocation();
 const navigate = useNavigate();
 const [tabPosition, setTabPosition] = useState("home");
 console.log(location);
 const tabOptions = [
  {
   iconName:"Home",
   page:"/home",
   action: (tab)=>handleTab(tab)
  },
  {
   iconName:"Favorite",
   page:"/favorites",
   action: (tab)=>handleTab(tab)
  },
  {
   iconName:"LogOut",
   page:"/",
   action: (tab)=>handleTab(tab),
  }
 ]

 useEffect(()=>{
  setTabPosition(location)
 },[location.pathname])

 function logOut() {
  console.log("cerrar sesion");
 }

 function handleTab(tab) {
  navigate(tab)
 }

 return(
  <Fragment>
   <nav className='NavBar__container'>
    <ul>
     {
      tabOptions.map((tab,index)=>{
       return(
        <li key={index} className="Icon__container" onClick={()=>tab.action(tab.page)}>
        <Icons 
         name={tab.iconName} 
         fill="#fcfeff" 
         stroke="#BCBCBC" 
         className={tabPosition.pathname === tab.page? "Tab_icons_selected": "Tab_icons" }
        />
       </li>
       )
      })
     }
    </ul>
   </nav>
  </Fragment>
 )
}