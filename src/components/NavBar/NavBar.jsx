import React, {useState} from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import NavBarmob from "./NavBarmob/NavBarmob";

const NavBar = ()=>{
    const [menuActive,setMenuActive] = useState(false);

    const components =[{value: 'News', href: '/news'},{value: 'Game Info', href: '/gameinfo'},
        {value: 'Crisis Event', href: '/crisisevent'},{value: 'Buddy Pass', href: '/buddypass'},
        {value: 'Community', href: '/community'},{value: 'Services', href: '/services'}]
return(
    <div className={s.nav}>
        <div className={s.forMobVer}>
            <a className={s.menu} onClick={()=>setMenuActive(!menuActive)}>
                <div className={menuActive? s.line+' '+s.act: s.line }></div>
                <div className={menuActive? s.line+' '+s.act: s.line }></div>
                <div className={menuActive? s.line+' '+s.act: s.line }></div>
            </a>
            <NavLink to="/" onClick={()=>{setMenuActive(false)}}>
                <div className={s.sizeIcon}>
                    <img className={s.sizeIcon}
                         src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5MsDD8NHPStwvCr8CAmX4S/9d69b30dfbc512c12b44678128c04f6e/R6E_logo_website_228x119_nav.png"
                         alt=""/>
                </div>
            </NavLink>
        </div>

        <div className={s.position}>
            <NavLink to="/news" className={(navData) => navData.isActive ? s.active : s.item}>
                <h2>News</h2>
            </NavLink>
            <NavLink to="/gameinfo" className={(navData) => navData.isActive ? s.active : s.item}>
                <h2>Game Info</h2>
            </NavLink>
            <NavLink to="/crisisevent" className={(navData) => navData.isActive ? s.active : s.item}>
                <h2>Crisis Event</h2>
            </NavLink>
            <NavLink to="/buddypass" className={(navData) => navData.isActive ? s.active : s.item}>
                <h2>Buddy Pass</h2>
            </NavLink>

            <NavLink to="/community" className={(navData) => navData.isActive ? s.active : s.item}>
                <h2>Community</h2>
            </NavLink>
            <NavLink to="/services" className={(navData) => navData.isActive ? s.active : s.item}>
                <h2>Services</h2>
            </NavLink>
        </div>

        <NavLink to="/buynow" onClick={()=>{setMenuActive(false)}} className={(navData) => navData.isActive ? s.activeBtnBuy : s.item} >
            <h2>Buy now</h2>
        </NavLink>
        <NavBarmob active={menuActive} setActive={setMenuActive} components={components} />


    </div>
)
}
export default NavBar;