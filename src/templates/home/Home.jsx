// HOME PAGE

import styles from './Home.module.css'
import VCod from "../vcod/VCod";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
    return (
        <>
            <Navbar/>
            <VCod gameTitle={"Call of Duty :"} subGameTitle={"Classic"} gameBackground={'url("/assets/background/game/cod1.png")'} versionList={["1.1", "1.1X", "1.2", "1.3"]}/>
        </>
    )
}

export default Home;
