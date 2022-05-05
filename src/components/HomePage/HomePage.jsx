import React from "react";
import SlideShow from "./SlideShow/SlideShow";
import GameInfos from "./GameInfos/GameInfos";
import PromoContent from "./PromoContent/PromoContent";
import Feeds from "./Feeds/Feeds";
import OwnerShip from "./OwnerShip/OwnerShip";
import s from "./HomePage.module.css"

const HomePage = ({valuesize, size}) => {
    return(
        <div className={s.defoultSett}>
            <SlideShow valuesize={valuesize} size={size}/>
            <GameInfos/>
            <PromoContent size={size}/>
            <Feeds/>
            <OwnerShip size={size}/>

        </div>
    )

}
export default HomePage;
