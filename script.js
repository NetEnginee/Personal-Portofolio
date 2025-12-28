const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");
toggle.addEventListener("click", () => menu.classList.toggle("show"));

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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close-modal");

  const certLinks = document.querySelectorAll(".cert-link");

  certLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const card = this.closest(".cert-card");
      const imgSource = card.querySelector("img").src;
      modal.classList.add("show");
      modalImg.src = imgSource;
    });
  });

  function closeModal() {
    modal.classList.remove("show");
  }

  closeBtn.onclick = closeModal;

  modal.onclick = function (e) {
    if (e.target === modal) {
      closeModal();
    }
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});

const cvButton = document.querySelector(
  'a[href*="Assets/Document/M Badil Arrohman CV.pdf"]'
);
const toastElement = document.getElementById("download-toast");

if (cvButton) {
  cvButton.addEventListener("click", () => {
    toastElement.classList.add("show");

    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 3000);
  });
}
