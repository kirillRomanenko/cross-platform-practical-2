const { ipcRenderer } = require('electron');

document.getElementById('play').addEventListener('click', () => {
    ipcRenderer.send('play-window')
});