import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarContainerGame}>
                    <div className={styles.navbarGame} id="cod1nav">
                        <img src={"/assets/logo/game/cod_1_logo.png"} width="42" height="42" alt="Call of Duty 1 Logo" />
                    </div>
                    <div className={styles.navbarGame} id="coduonav">
                        <img src="/assets/logo/game/cod_uo_logo.png" width="42" height="42" alt="Call of Duty United Offensive Logo" />
                    </div>
                    <div className={styles.navbarGame} id="cod2nav">
                        <img src="/assets/logo/game/cod_2_logo.png" width="42" height="42" alt="Call of Duty 2 Logo" />
                    </div>
                </div>
                <div className={styles.navbarNotShow}>

                </div>
            </div>
        </>
    )
}

export default Navbar;
