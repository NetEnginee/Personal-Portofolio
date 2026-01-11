export default function initCertificateModal() {
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

    if (closeBtn) {
      closeBtn.onclick = closeModal;
    }

    if (modal) {
      modal.onclick = function (e) {
        if (e.target === modal) {
          closeModal();
        }
      };
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal?.classList.contains("show")) {
        closeModal();
      }
    });
  });
}
