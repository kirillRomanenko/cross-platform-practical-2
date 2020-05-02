const { app, ipcMain, BrowserWindow } = require('electron');

function main() {
    let window = new BrowserWindow({
        width: 288,
        height: 520,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // window.webContents.openDevTools();
    window.loadFile('./renderer/index.html');
}
app.on('ready', main)