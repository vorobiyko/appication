import React from "react";
import s from "./Footer.module.css"
import Promo from "./Promo/Promo";

const Footer = () => {
  return(
      <div>
          <Promo/>
          <div className={s.settingsFooter}>
              <div className={s.navFoot}>
                  <div className={s.logo}>
                      <img className={s.img} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XCWqHQ3hOuBmyusKElkek/6c329abfa57144e341faee3b12d56779/R6E_logo_website_448x232.png" alt=""/>
                  </div>
                  <div className={s.links}>
                      <span className={s.link}><h3>Store</h3></span>
                      <span className={s.link}><h3>Connect</h3></span>
                      <span className={s.link}><h3>Company</h3></span>
                      <span className={s.link}><h3>News</h3></span>
                      <span className={s.link}><h3>Support</h3></span>
                  </div>
                  <div className={s.logo2}>
                      <img className={s.img2} src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3w9nhphwcMoRBes4bi4wck/f23c84cb44fecc20d7896c1840bd6088/pegi18-white.jpg" alt=""/>
                  </div>
              </div>

              <span className={s.copyright}>© 2021 Entertainment. All Rights Reserved. Rainbow Six, the Soldier Icon and the logo are registered or unregistered trademarks of Entertainment in the US and/or other countries.
              </span>
          </div>
      </div>

  )
}
export default Footer;