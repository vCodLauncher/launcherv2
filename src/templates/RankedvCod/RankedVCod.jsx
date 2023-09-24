import styles from './RankedVCod.module.css'
import React from "react";

const RankedVCod = () => {
    return(
        <section className={styles.container}>
            <div className={styles.containerCard}>
                <div className={styles.card} style={{backgroundImage: `url("assets/background/cards/card4.jpeg")`}}>
                    <p className={styles.textContainer}>
                        <span className={styles.matchtypeTitle}>HEADQUARTERS</span>
                        <br/>
                        <span className={styles.matchtypeDescription}>Capture or destroy the radio !</span>
                    </p>
                </div>
                <a className={styles.card} style={{backgroundImage: `url("assets/background/cards/card5.webp")`}} href={'/rankedlaunch'}>
                    <p className={styles.textContainer}>
                        <span className={styles.matchtypeTitle}>SEARCH & DESTROY</span>
                        <br/>
                        <span className={styles.matchtypeDescription}>Defend or destroy the objectives !</span>
                    </p>
                </a>
                <div className={styles.card} style={{backgroundImage: `url("assets/background/cards/card22.jpeg")`}}>
                    <p className={styles.textContainer}>
                        <span className={styles.matchtypeTitle} style={{color : "white"}}>CAPTURE THE FLAG</span>
                        <br/>
                        <span className={styles.matchtypeDescription}>Capture the enemy flag !</span>
                    </p>
                </div>
            </div>
            <a className={styles.quitContainer} href={"/"}>
                BACK MENU
            </a>
        </section>
    )
}

export default RankedVCod