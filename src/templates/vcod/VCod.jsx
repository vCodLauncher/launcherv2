import React from 'react';
import styles from './VCod.module.css';
import './VCod.module.css'

const VCod = () => {
    return (
        <>
            <div className={styles.gameContainer}>
                <h1 className={styles.gameTitle} id="title">
                    Call Of Duty: <br/>
                    Classic
                </h1>
                <div className={styles.containerButton}>
                    <div className={styles.buttonPlay} onClick="">
                        <img className={styles.playIcon} id="play-icon" src="../assets/icon/button-play.png" width="32"
                             height="32" alt="Play Icon" />
                        <p>Launch game</p>
                        <div className={styles.loader}></div>
                    </div>
                    <div className={styles.buttonSettings}>
                        <img className={styles.playIcon} src="../assets/icon/reglages.png" width="32" height="32" alt="Settings Icon" />
                    </div>
                    <div id="version" className={styles.version}>
                        <p id="current-version">1.1x</p><i id="versionArrow" className={styles.arrowDown}></i>
                    </div>
                    <div id="version-dropdown" className={styles.versionDropdown}>
                        <ul id="version-list" className={styles.versionList}>

                        </ul>
                    </div>

                </div>
                <div className={styles.matchtypeContainer}>
                    <div className={styles.matchtypeContainer}>
                        <div className={styles.matchtype}>
                            <div className={styles.matchtypeBackgroundBr}>

                            </div>
                            <div className={styles.matchtypeNameContainer}>
                                BATTLE ROYAL
                            </div>
                        </div>
                    </div>
                    <a href="../modules/competitive/competitive.html">
                        <div className={styles.matchtypeContainer}>
                            <div className={styles.matchtype}>
                                <div className={styles.matchtypeBackground}>

                                </div>
                                <div className={styles.matchtypeNameContainer}>
                                    PLAY COMPETITIVE
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default VCod;
