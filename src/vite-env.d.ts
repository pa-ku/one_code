/// <reference types="vite/client" />

interface Window {
  // This will properly type the Tauri API on the window object
  __TAURI__?: import('@tauri-apps/api').TauriInstance;
}
