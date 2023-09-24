import styles from './RankedLaunch.module.css'
import React from "react";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/staatliches"

const RankedLaunch = () => {
    return(
        <section className={styles.container}>
            <div className={styles.topBar}>
                <h1>
                    COMPETITIVE
                </h1>
                <div className={styles.typeSelectContainer}>
                    <div className={styles.typeNameContainer} style={{marginLeft : "2rem"}}>
                        5V5 TEAM
                    </div>
                    <div className={styles.typeNameContainer}>
                        5V5 MIX
                    </div>
                </div>
            </div>
            <div className={styles.middleBar}>
                <div className={styles.leagueBox}>
                    <img src={"/assets/logo/league/codbase.png"} className={styles.leagueLogo}/>
                    <p>CODBASE LEAGUE</p>
                    <p>Season 1</p>
                </div>
                <div className={styles.leaguePosition}>
                    <p>
                        League position
                    </p>
                    <h1>
                        <span style={{fontSize : 80}}>2</span>nd
                    </h1>
                </div>
                <div className={styles.statsBox}>
                    <div className={styles.statsTitleBox}>
                        Your stats
                    </div>
                    <div>
                        <h4>
                            Matchs won
                        </h4>
                        <p>
                            78
                        </p>
                    </div>
                    <div>
                        <h4>
                            Win rate
                        </h4>
                        <p>
                            1.23
                        </p>
                    </div>
                    <div>
                        <h4>
                            Kills
                        </h4>
                        <p>
                            128
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <a className={styles.quitContainer} href={"/"}>
                    BACK HOME
                </a>
                <div className={styles.findMatchContainer}>
                    <div className={styles.findMatchButton}>
                        FIND MATCH !
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RankedLaunch;