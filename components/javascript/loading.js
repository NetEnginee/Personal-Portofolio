export default function loading() {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("hide");
      }, 500);
    });
  }
}
