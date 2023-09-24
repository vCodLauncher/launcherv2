const { app, BrowserWindow } = require('electron');

let mainWindow;

const path = require('path');

// Condition pour s'assurer que le rechargement n'est activé qu'en mode développement
if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        resizable: false,
        fullscreenable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    mainWindow.loadFile('dist/index.html');

}


app.on('ready', createWindow);
try {
    require('electron-reloader')(module)
} catch (_) {}