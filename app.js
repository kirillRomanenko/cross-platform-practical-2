const { app, ipcMain, BrowserWindow } = require('electron');

function main() {
    let window = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // window.webContents.openDevTools();
    window.loadFile('./renderer/index.html');

    let playWindow;
    ipcMain.on('play-window', () => {
        if (!playWindow) {
            playWindow = new BrowserWindow({
                width: 300,
                height: 525,
                parent: window,
                webPreferences: {
                    nodeIntegration: true
                }
            });
            // playWindow.webContents.openDevTools();
            playWindow.loadFile('./renderer/play.html');
            playWindow.on('closed', () => {
                playWindow = null
            })
        }

    })
}
app.on('ready', main)