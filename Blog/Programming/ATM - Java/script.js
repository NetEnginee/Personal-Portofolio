document.addEventListener("DOMContentLoaded", () => {
  const tocContainer = document.getElementById("toc-menu");
  const headers = document.querySelectorAll(".content-body h2");

  headers.forEach((header, index) => {
    if (!header.id) {
      header.id = `section-${index}`;
    }

    const link = document.createElement("a");
    link.href = `#${header.id}`;
    link.textContent = header.textContent;
    link.classList.add("toc-link");

    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });

    tocContainer.appendChild(link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          document.querySelectorAll(".toc-link").forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { rootMargin: "-100px 0px -60% 0px" }
  );

  headers.forEach((header) => observer.observe(header));

  const copyBtns = document.querySelectorAll(".copy-btn");

  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".code-block").querySelector("code");
      const textToCopy = codeBlock.innerText;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class='bx bx-check'></i> Copied!`;
        btn.style.color = "#d4af37";

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = "";
        }, 2000);
      });
    });
  });
});

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
