// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron/renderer';

contextBridge.exposeInMainWorld('electronAPI', {
  clientToggle: (state: boolean) => ipcRenderer.invoke('client:toggle', state),
  autobootToggle: (state: boolean) => ipcRenderer.invoke('autoboot:toggle', state),
  onStateChange: (callback: any) => ipcRenderer.on('update-counter', (_event, value) => callback(value))
})