import React, {useState} from "react";
import s from "./PromoContent.module.css"
import slide from ".//../SlideShow/SlideShow.module.css";
import {NavLink} from "react-router-dom";


const PromoContent = ({size}) => {
    const [state1,setState1] = useState(false);
    const [state2,setState2] = useState(false);
    const [state3,setState3] = useState(false);

    let opacity = 1;
    let currentWidth = size[0];
    let amountObject = (currentWidth< 850 ? 1.2 : 3)
    let padding = 0.01;
    let defaultSize= 0.66;
    let activeSize = 0.8;
    let defaultHeight = (currentWidth/amountObject-currentWidth*2*padding)*defaultSize;
    let maxHeight = (currentWidth/amountObject-2*currentWidth*padding)*activeSize;
    let defaultWidth = (currentWidth/amountObject-2*currentWidth*padding)*defaultSize;
    let maxWidth = (currentWidth/amountObject-2*currentWidth*padding)*activeSize;


return(
    <div className={s.settingsPromo}>
        <h1 className={s.title}>SPECIALIZED REACT OPERATORS</h1>
        <p className={s.paragraf}>Elite Rainbow Six Operators joined forces to create REACT (Rainbow Exogenous Analysis & Containment Team), a highly specialized and outfitted organization to face the deadly parasitic threat.</p>
        <div className={s.cards} style={{height: maxHeight +'px'}}>
            <div className={s.card} style={state1 ? {opacity: opacity, height: maxHeight, width: maxWidth}:{height: defaultHeight, width: defaultWidth}}
            onMouseEnter={()=>setState1(!state1)} onMouseLeave={()=>setState1(!state1)}></div>
            <div className={s.card} style={state2 ? {opacity: opacity, height: maxHeight, width: maxWidth}:{height: defaultHeight, width: defaultWidth}}
                 onMouseEnter={()=>setState2(!state2)} onMouseLeave={()=>setState2(!state2)}></div>
            <div className={s.card} style={state3 ? {opacity: opacity, height: maxHeight, width: maxWidth}:{height: defaultHeight, width: defaultWidth}}
                     onMouseEnter={()=>setState3(!state3)} onMouseLeave={()=>setState3(!state3)}></div>
        </div>
        <NavLink to='/gameinfo' className={slide.btn} >
            <div className={slide.btnBox}>
                <h2 className={slide.propsTextBtn}>MORE OPERATORS</h2>
            </div>
        </NavLink>
    </div>
)
}

export default PromoContent;