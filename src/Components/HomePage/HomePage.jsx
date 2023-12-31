import React from 'react'
import classes from "./HomePage.module.css"
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const imgUrl = "https://sun9-24.userapi.com/impg/2_rc7Xwli1dI6R88I1IZn_gsfmpxwqcapVHBww/9Sa47HT6YhI.jpg?size=754x918&quality=96&sign=070f1dadd1778ab68527cd89972387b4&type=album"
    // const imgUrl2 = 'https://sun2-22.userapi.com/impg/2YiE2IW9r0friRMzAEniG_oR87ffPUfqKRswKw/vtMiX4nUf8o.jpg?size=300x300&quality=96&sign=7757c3bd97980caf5674faa89f7781c3&type=album'
    const imgAlt = "Каверы Подземки"
    // const frontAudio = "https://drive.google.com/uc?export=download&id=1U3M7aGhmpFQHd3SNNupwghkrQagbRKq2";
    // const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      {/* <span className={classes.navLink}>Сборник за 3 года</span> */}
                      <Link to="/cavers21"  className={classes.navLink21}>2021</Link>
                      <Link to="/cavers22"  className={classes.navLink22}>2022</Link>
                      <Link to="/cavers23"  className={classes.navLink23}>2023</Link>
      
                     {/* <Link to={`/cavers21`} className={classes.navLink21}>Слушаем!</Link> */}
                      {/* <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link> */}
                      <div className={classes.main}>
                      
                          <div className={classes.article}><p >Кайфа по жизни!</p></div>
                          <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl} width={100} alt={imgAlt} /></div>
                          {/* <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl2} width={100} alt={imgAlt} /></div> */}
                      </div>
                  </div>
              </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header">
              <div className="device-sensors"></div>
          </div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
      </div>
  )
}
