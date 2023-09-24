import styles from './RankedLaunch.module.css'
import React from "react";

import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/staatliches"

const RankedLaunch = () => {
    return(
        <section className={styles.container}>
            <div className={styles.topBar}>

            </div>
            <div className={styles.middleBar}>
                <div className={styles.leagueBox}>
                    <img src={"/assets/logo/league/codbase.png"} className={styles.leagueLogo}/>
                    <p>CODBASE LEAGUE</p>
                    <p>Season 1</p>
                </div>
                <div className={styles.leaguePosition}>

                </div>
            </div>
            <div className={styles.bottomBar}>
                <a className={styles.quitContainer} href={"/"}>
                    BACK MENU
                </a>
            </div>
        </section>
    )
}

export default RankedLaunch;