const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const emptyMenu = Menu.buildFromTemplate([]);
Menu.setApplicationMenu(emptyMenu);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
  });
  win.loadURL("http://localhost:6969");
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if ((BrowserWindow.getAllWindows(), length === 0)) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

module.exports = { app };
