import React from "react";
import s from "./OwnerShip.module.css"
import {NavLink} from "react-router-dom";
import slide from ".//../SlideShow/SlideShow.module.css";

const OwnerShip = ({size}) => {
    return(
        <div>
            <div className={s.wrapperContent} style={{height: size[0]/3.1}}>
                <h1 className={s.header}>PLAY RAINBOW SIX SIEGE AND RAINBOW SIX EXTRACTION AND GET REWARDS</h1>
                <p className={s.text}>Playing both games will grant you the cosmetic United Front bundle in each games and unlock the 19 Operators from Extraction in Siege!</p>
                <NavLink to='/gameinfo' className={slide.btn} >
                    <div className={slide.btnBox}>
                        <h2 className={slide.propsTextBtn}>LEARN MORE</h2>
                    </div>
                </NavLink>
            </div>
        </div>
    )

}
export default OwnerShip;