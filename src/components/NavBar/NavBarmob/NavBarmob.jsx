import React from "react";
import s from "./NavBarmob.module.css"
import {NavLink} from "react-router-dom";

const NavBarmob = ({components, active, setActive}) => {
    const clases = s.navMob+' '+s.active;
    return(
        <div className={active ? clases : s.navMob} >
            <div className={s.menuContent}>
                {components.map(components =>
                <NavLink to={components.href} onClick={()=>{setActive(false)}}
                         className={(navData) => navData.isActive ? s.activeComponent : ''}>
                    <h2>{components.value}</h2>
                </NavLink>
                    )}
            </div>
        </div>)
}
export default NavBarmob;