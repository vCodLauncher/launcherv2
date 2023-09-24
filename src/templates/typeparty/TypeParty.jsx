import React from 'react';
import styles from './TypeParty.module.css'; // Importez les styles depuis votre module CSS


import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/staatliches"


const TypeParty = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
            <section className={styles.competitiveContainer}>
                <div className={styles.competitive}>
                    <span className={styles.wrapper}>
                        <a className={`${styles.matchtypeCard} ${styles.card}`} href="gamemode/gamemode.html">
                            <p className={styles.textContainer}>
                                <span className={styles.matchtypeTitle}>UNRANKED</span>
                                <br/>
                                <span className={styles.matchtypeDescription}>et glou glou et glou glou glou glou glou glou</span>
                            </p>
                        </a>
                        <a className={`${styles.matchtypeCardRanked} ${styles.card}`} href={"/rankedvcod"}>
                            <p className={styles.textContainer}>
                                <img src="/assets/logo/league/codbase.png"
                                     width="100"
                                     height="100"
                                     style={{borderRadius: '33%'}}
                                     alt="CODBASE LEAGUE Logo"
                                />
                                <span className={styles.matchtypeTitle}>CODBASE LEAGUE</span>
                                <br/>
                                <br/>
                                <span className={styles.matchtypeDescription}>Ranked league</span>
                            </p>
                        </a>
                    </span>
                </div>
                <div className={styles.infoContainer}>
                    Do not forget to link your account to play league.
                </div>
                <a className={styles.quitContainer} href={"/"}>
                    BACK HOME
                </a>
            </section>
        </div>
    )
}

export default TypeParty;
