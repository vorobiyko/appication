import React, {useState} from "react";
import s from "./SlideShow.module.css"

const SlideShow = ({valuesize,size}) => {

    window.onresize = valuesize;
    return(
            <div className={s.media}
            style={{height: size[0]/3+'px'}}>
                <video autoPlay={true} loop={true} muted={true} className={s.loopingVideo}>
                    <source src='https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1rMjZZUH9wh5dYWI9bk92e/63c3e4ad2e3c525a4c590d9e2794416d/SPILLOVER_MONTAGE_7sec.mp4'
                            type='video/mp4'/>
                </video>
                <div className={s.slideContent}>
                    <h1 className={s.title}>SPILLOVER</h1>
                    <div className={s.content}>
                        <p>Ready your squad for the ultimate defense experience in a brand new game mode and unlock Zofia, new REACT Tech, and more!</p>
                    </div>
                    <a className={s.btn} href="https://www.ubisoft.com/en-gb/game/rainbow-six/extraction/crisis" target="_blank">
                        <div className={s.btnBox}>
                            <h2 className={s.propsTextBtn}>LEARN MORE</h2>
                        </div>
                    </a>
                </div>
            </div>
    )
}
export default SlideShow;