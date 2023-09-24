import React, {useEffect, useState} from 'react';
import styles from './VCod.module.css';

import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/staatliches";



const VCod = ({ gameTitle, subGameTitle, gameBackground, versionList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentVersion, setCurrentVersion] = useState(versionList[0]);
    const [gameName, setGameName] = useState([0]);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsOpen(true);
        }, 300); // Délai de transition de 0.3s

        return () => clearTimeout(timeout);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {

        if (!localStorage.getItem('currentGameName')) {
            localStorage.setItem('currentGameName', 'cod1');
        }

        setGameName(localStorage.getItem("currentGameName")); // Affectez une valeur à gameName ici

        const storedVersion = localStorage.getItem("currentVersion-" + gameName);

        if (!storedVersion) {
            localStorage.setItem("currentVersion-" + gameName, versionList[0]);
            setCurrentVersion(versionList[0]); // Mettez à jour le state initial
        } else {
            setCurrentVersion(storedVersion);
        }
    }, []);

    return (
        <section className={styles.content}>
            <div className={styles.gameContainer} style={{backgroundImage : gameBackground}}>
                <h1 className={styles.gameTitle} id="title">
                    {gameTitle}
                    <br />
                    {subGameTitle}
                </h1>
                <div className={styles.containerButton}>
                    <div className={styles.buttonPlay} onClick="">
                        <img className={styles.playIcon} id="play-icon" src="/assets/icon/button-play.png" width="32"
                             height="32" alt="Play Icon" />
                        <p className={styles.poppins}> Launch game</p>
                        <div className={styles.loader}></div>
                    </div>
                    <div className={styles.buttonSettings}>
                        <img className={styles.playIcon} src="/assets/icon/reglages.png" width="32" height="32" alt="Settings Icon" />
                    </div>
                    <div id="version" className={styles.version} onClick={toggleDropdown}>
                        <p id="current-version">{currentVersion}</p><i id="versionArrow" className={`${styles.arrow} ${styles.down}`}></i>
                    </div>
                    <div id="version-dropdown" className={`${styles.versionDropdown} ${isOpen ? styles.dropdownActive : ''}`}>
                        <ul id="version-list" className={styles.versionList}>
                            {versionList.map((version, index) => (
                                <li key={index} className={styles.versionItem} onClick={() => {
                                    localStorage.setItem("currentVersion-"+gameName, version);
                                    toggleDropdown();
                                } }>{version}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.matchtypeContainer}>
                    <div className={styles.matchtypeContainer}>
                        <div className={styles.matchtype}>
                            <div className={styles.matchtypeBackgroundBr}></div>
                            <div className={styles.matchtypeNameContainer}>BATTLE ROYAL</div>
                        </div>
                    </div>
                    <a href="/typeparty" className={styles.nolink}>
                        <div className={styles.matchtypeContainer}>
                            <div className={styles.matchtype}>
                                <div className={styles.matchtypeBackground}></div>
                                <div className={styles.matchtypeNameContainer}>PLAY COMPETITIVE</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default VCod;
