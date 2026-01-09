document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".filter-item");
  const noPostMsg = document.getElementById("no-post-msg");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("onclick").split("'")[1];

      filterSelection(category);
    });
  });

  function filterSelection(category) {
    let visibleCount = 0;

    cards.forEach((card) => {
      card.classList.remove("fade-in");

      if (category === "all" || card.classList.contains(category)) {
        card.classList.remove("hide");

        void card.offsetWidth;
        card.classList.add("fade-in");

        visibleCount++;
      } else {
        card.classList.add("hide");
      }
    });

    if (noPostMsg) {
      if (visibleCount === 0) {
        noPostMsg.classList.remove("hide");
        noPostMsg.classList.add("fade-in");
      } else {
        noPostMsg.classList.add("hide");
        noPostMsg.classList.remove("fade-in");
      }
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
});
