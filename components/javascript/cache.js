export default function cache() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) =>
          console.log("Service Worker: Registered (Scope: " + reg.scope + ")")
        )
        .catch((err) => console.log("Service Worker: Error:", err));
    });
  }
}
