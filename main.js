// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Enable Node.js integration in the renderer process.
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true
  });

  win.loadFile('index.html');
}

// Create the window when Electron has finished initialization.
app.whenReady().then(createWindow);

// Listen for messages from the renderer to run Node scripts.
ipcMain.on('run-node-script', (event, scriptPath) => {
  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${scriptPath}:`, error);
      event.reply('script-output', `Error: ${error.message}`);
      return;
    }
    event.reply('script-output', stdout);
  });
});

app.on('window-all-closed', () => {
  // On macOS, it's common for apps to stay open until the user quits explicitly.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, recreate a window if the dock icon is clicked and no other windows are open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
