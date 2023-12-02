import styles from './RankedLaunch.module.css'
import React, {useState} from "react";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/staatliches"
import axios from 'axios';

const RankedLaunch = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playersInRoom, setPlayersInRoom] = useState(0);


    const MatchFindingModal = ({ isOpen, players, onCancel }) => {
        if (!isOpen) return null;

        return (
            <div className={styles.modal}>
                <div className={styles.content}>
                    <h2>Searching a match ...</h2>
                    <div className={styles.playerSlots}>
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className={players > index ? styles.playerSlotActive : styles.playerSlot}></div>
                        ))}
                    </div>
                    <button className={styles.cancelButton} onClick={onCancel}>Cancel</button>
                </div>
            </div>
        );
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const findMatch = async () => {
        setIsModalOpen(true);

        try {
            console.log("Recherche de match ...");
            const response = await axios.get('http://85.209.176.44:3002/room/findRoom');
            console.log(response.data);
            setPlayersInRoom(response.data.playersCount); // Assurez-vous que cela correspond à la structure de votre réponse
        } catch (error) {
            console.error("Erreur lors de la recherche de match:", error);
            // Gérer l'erreur ici
        }
    };


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
                    <div className={styles.findMatchButton} onClick={findMatch}>
                        FIND MATCH !
                    </div>
                </div>
                <MatchFindingModal isOpen={isModalOpen} players={playersInRoom} onCancel={handleCancel} />
            </div>
        </section>
    )
}

export default RankedLaunch;