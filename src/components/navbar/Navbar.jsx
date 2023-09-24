import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container-game">
                    <div className="navbar-game" id="cod1nav" onClick="switchGame('cod1')">
                        <img src="../assets/game_logo/cod_1_logo.png" width="42" height="42" />
                    </div>
                    <div className="navbar-game" id="coduonav" onClick="switchGame('cod_united_offensive')">
                        <img src="../assets/game_logo/cod_uo_logo.png" width="42" height="42" />
                    </div>
                    <div className="navbar-game" id="cod2nav" onClick="switchGame('cod2')">
                        <img src="../assets/game_logo/cod_2_logo.png" width="42" height="42" />
                    </div>
                </div>
                <div className="navbar-not-show">
t
                </div>
            </div>
        </>
    )
}

export default Navbar;