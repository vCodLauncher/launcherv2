import '../../modules/update/Update.css';
import { ipcRenderer } from "electron";

export default function Update() {

    setTimeout(() => {
        ipcRenderer.invoke('startUpdatedGame').catch((error) => {
            console.error(error);
        });
    }, 3000);

    return (
        <>
            <div className="container">
                <img alt="logo" className="logo" src="/assets/logo/app/codlite_logo.png"/>

                <h4 id="message" className="message">Checking for update <p id="wait"></p></h4>

                <progress id="progress" className="progress progress1" max="100" value="0"></progress>
            </div>
        </>
    )
}

