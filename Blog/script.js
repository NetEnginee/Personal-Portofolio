// LOGIC FILTERING (Tidak berubah, tetap bekerja dengan baik)
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".filter-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Add active to clicked button
    btn.classList.add("active");

    const category = btn.getAttribute("onclick").split("'")[1];
    filterSelection(category);
  });
});

function filterSelection(category) {
  let visibleCount = 0;
  const noPostMsg = document.getElementById("no-post-msg");

  cards.forEach((card) => {
    card.classList.remove("fade-in");

    if (card.id === "no-post-msg") return;

    if (category === "all" || card.classList.contains(category)) {
      card.classList.remove("hide");
      void card.offsetWidth;
      card.classList.add("fade-in");
      visibleCount++;
    } else {
      card.classList.add("hide");
    }
  });

  if (visibleCount === 0) {
    noPostMsg.classList.remove("hide");
    noPostMsg.classList.add("fade-in");
  } else {
    noPostMsg.classList.add("hide");
  }
}

const preloader = document.getElementById("preloader");

if (preloader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");
    }, 500);
  });
}

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
