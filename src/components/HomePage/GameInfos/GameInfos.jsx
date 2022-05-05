import React from "react";
import s from "./GameInfos.module.css";
import slide from ".//../SlideShow/SlideShow.module.css";
import {NavLink} from "react-router-dom";

const GameInfos = () => {
    return(
        <div className={s.settingsGameBlock}>
            <div className={s.header}>
                <h1>THE ULTIMATE TACTICAL CO-OP EXPERIENCE</h1>
            </div>
            <div className={s.paragraf}>
                <p>Assemble your elite team of Rainbow Six Operators to launch incursions in the unpredictable containment zones and face off an evolving Alien threat. Band together and put everything on the line as you take on this unknown enemy.
                </p>
            </div>
            <NavLink to='/gameinfo' className={slide.btn} >
                <div className={slide.btnBox}>
                    <h2 className={slide.propsTextBtn}>LEARN MORE</h2>
                </div>
            </NavLink>
            <div className={s.cards}>
                <div className={s.card} >
                    <h1>LEAD ELITE RAINBOW SIX OPERATORS</h1>
                    <div className={s.sizePar}>
                        <p className={s.colorP}>Pick from 19 Rainbow Six operators. Assemble a squad in Co-op of up to three Operators, or go solo. Each operator has a specific set of weapons and abilities to learn improve and master, and improve through a new progression-system.</p>
                    </div>
                </div>
                <div className={s.card}>
                    <h1>RISK IT ALL IN CONTAINMENT ZONES</h1>
                    <div className={s.sizePar}>
                        <p className={s.colorP}>Explore 12 custom-designed maps located across the US, featuring unpredictable challenges that will test your knowledge, cooperation, and tactical abilities. Every incursion is unique thanks to its dynamic variables: the Sprawl’s behavior, the missions, the enemies, and more. Fail and your Operators will go Missing in Action (MIA).</p>
                    </div>
                </div>
                <div className={s.card}>
                    <h1>FIGHT AN EVER-EVOLVING THREAT</h1>
                    <div className={s.sizePar}>
                        <p className={s.colorP}>Be prepared to fight a highly lethal and constantly evolving Alien threat that's reshaping the battlefield. You must count on your teammates to face 10+ unique parasitic archetypes. From the elusive Tormenter to the daunting Apex, their abilities – and randomly occuring mutations – will stand in your way.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default GameInfos;