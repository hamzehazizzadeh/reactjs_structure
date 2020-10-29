// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

let installPromptEvent;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  installPromptEvent = e;
});