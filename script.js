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

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey &&
      e.shiftKey &&
      (e.key === "I" || e.key === "J" || e.key === "C")) ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
  }
});

const cvButton = document.querySelector(
  'a[href*="Assets/Document/M Badil Arrohman CV.pdf"]'
);

const toastElement = document.getElementById("download-toast");

if (cvButton && toastElement) {
  cvButton.addEventListener("click", () => {
    toastElement.classList.add("show");

    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 2000);
  });
}

const preloader = document.getElementById("preloader");

if (preloader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");
    }, 500);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
