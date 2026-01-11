export default function initNavigation() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggle.classList.toggle("active");
    });
  }

  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      const sectionLink = document.querySelector(
        ".nav-list a[href*=" + sectionId + "]"
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionLink?.classList.add("active-link");
      } else {
        sectionLink?.classList.remove("active-link");
      }
    });
  }

  window.addEventListener("scroll", scrollActive);
}
