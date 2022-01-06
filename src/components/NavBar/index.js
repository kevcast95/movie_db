import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import { logOut } from "../../connection/firebase";
import Icons from '../../assets/Icons';

import './NavBar.css'

export default function NavBar() {
    let location = useLocation();
    const navigate = useNavigate();
    const [tabPosition, setTabPosition] = useState("home");
    const tabOptions = [
        {
        tabName:"Home",
        page:"/home",
        action: (tab)=>handleTab(tab),
        },
        {
        tabName:"Favorite",
        page:"/favorites",
        action: (tab)=>handleTab(tab),
        },
        {
        tabName:"Log out",
        page:"/",
        action: ()=> logOut(),
        }
    ]

    useEffect(()=>{
        setTabPosition(location)
    },[location.pathname]);

    function handleTab(tab) {
        navigate(tab);
    }

    return(
    <Fragment>
        <nav className='NavBar__container'>
            <div className='Movieapp__logo'>
                <p>MOVIE</p>
                <p>APP</p>
            </div>
            <ul>
            {
            tabOptions.map((tab,index)=>{
            return(
                <li 
                    key={index} className={tabPosition.pathname === tab.page? "Tab__selected Tab__container": "Tab__container"} 
                    onClick={()=>{tab.action(tab.page);console.log('logooo');}}
                >
                    {tab.tabName}
            </li>
            )
            })
            }
            </ul>
        </nav>
    </Fragment>
    )
}