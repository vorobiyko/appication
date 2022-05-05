import React from "react";
import s from "./Promo.module.css"

const Promo = () => {
  return(
      <div className={s.settingsPromo}>
          <span className={s.text}>
              Visit Other Social Channels
          </span>
          <div className={s.social}>
              <a href="https://twitter.com/?lang=ru" target="_blank" className={s.card}>
                  <img className={s.img} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/77snMOdTk8KuF0RKZl8El1/2264f4c4fe5f77ebee024f5883397843/fc6-socialicon_twitter.png" alt=""/>
              </a>
              <a href='https://www.instagram.com/' target="_blank" className={s.card}>
                  <img className={s.img} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/41Eb6WonGN9rn3b7rwKM6h/f2af3263865bd1fbc5ed4d4f20a22bce/fc6-socialicon_instagram.png" alt=""/>
              </a>
              <a href='https://www.facebook.com/' target="_blank" className={s.card}>
                  <img className={s.img} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3ZzZbMXNcDLan1Ud0G2tOc/d34d080fa92be4c1ed26ac958f46f383/fc6-socialicon_facebook.png" alt=""/>
              </a>
              <a href='https://discord.com/' target="_blank" className={s.card}>
                  <img className={s.img} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5hgeaB7oRYidk7fhSI9xX0/27f9951a31b77752dad809567779a502/discord_social.png" alt=""/>
              </a>
              <a href='https://www.reddit.com/' target="_blank" className={s.card}>
                  <img className={s.img} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3RowOfwKlNm6836UCAflRk/8f0205c99c540b6b89b6e96a17938211/social_reddit.png" alt=""/>
              </a>
              <a href='https://www.messenger.com/' target="_blank" className={s.card}>
                  <img className={s.img} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/21FO30s2U4HDwmcJjU4bGY/7595102f7ea7f91a46b5bf9ca51084b3/_Ubisoft__global_forum_logo.png" alt=""/>
              </a>
          </div>
      </div>
  )
}
export default Promo;