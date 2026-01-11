export default function initToast() {
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
}

export function showToast(message, duration = 2000) {
  const toastElement = document.getElementById("download-toast");

  if (toastElement) {
    const toastContent = toastElement.querySelector(".toast-content h4");
    if (toastContent && message) {
      toastContent.textContent = message;
    }

    toastElement.classList.add("show");

    setTimeout(() => {
      toastElement.classList.remove("show");
    }, duration);
  }
}
