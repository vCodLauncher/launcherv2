const path = require('path');
const { ipcMain, dialog} = require('electron');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');


function createWindow() {
    ipcMain.handle('getUserDataPath', (event) => {
        const userDataPath = app.getPath('userData');
        console.log(userDataPath)
        return userDataPath;
    });
    ipcMain.on('open-folder-dialog', (event) => {
        dialog
            .showOpenDialog({properties: ['openDirectory']})
            .then((result) => {
                const selectedDirectory = result.filePaths[0];
                event.sender.send('selected-folder', selectedDirectory);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    const updateWindow = new BrowserWindow({
        width: 300,
        height: 400,
        resizable: false,
        fullscreenable: false,
        frame: false,
        movable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    updateWindow.setIcon(path.join(__dirname, 'assets/logo/app/codlite_logo.png'));
    updateWindow.setTitle('COD Launcher - Update');
    updateWindow.loadURL(
        isDev
            ? 'http://localhost:3000/update'
            : `file://${path.join(__dirname, '../build/update.html')}`
    );
    updateWindow.setMenu(null);

    ipcMain.handle('startUpdatedGame', (event) => {
        updateWindow.close();
        launchMainWindow();
    });
    if (isDev) {
        updateWindow.webContents.openDevTools({ mode: 'detach' });
    }
}


function launchMainWindow() {
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

    mainWindow.setIcon(path.join(__dirname, 'assets/logo/app/codlite_logo.png'));
    mainWindow.setTitle('COD Launcher');

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

try {
    require('electron-reload')(module)
} catch (_) {
}
