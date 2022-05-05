import React from "react";
import s from "./Feeds.module.css"
import slide from ".//../SlideShow/SlideShow.module.css";
import {NavLink} from "react-router-dom";

const Feeds = () => {
return(
    <div className={s.homeFeeds}>
        <h1 className={s.title}>SPECIALIZED REACT OPERATORS</h1>
        <div className={s.contentBlock}>
                <img className={s.sizeImage} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7CrInOrSGOtVqalAI9nsJq/0d50127717460bb4c95ff0a21268ca79/STORE_R6E_2022_960x540.jpg" alt=""/>
            <p className={s.paragraf}>UP TO 35% OFF RAINBOW SIX EXTRACTION FOR OUR SPRING SALE!</p>
            <NavLink to='/news' className={s.button}><h2 className={s.textColor}>Read More</h2></NavLink>
        </div>
        <NavLink to='/news' className={slide.btn} >
            <div className={slide.btnBox}>
                <h2 className={slide.propsTextBtn}>ALL NEWS</h2>
            </div>
        </NavLink>

    </div>
)
}
export default Feeds;