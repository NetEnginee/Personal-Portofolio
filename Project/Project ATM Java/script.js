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

const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => menu.classList.toggle("show"));
}

const btnDownload = document.querySelector(".btn-download");
const toast = document.getElementById("toast");
const confirmModal = document.getElementById("confirm-modal");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

let downloadCount = 1;

function showToast() {
  toast.className = "toast show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

if (btnDownload) {
  btnDownload.addEventListener("click", function (e) {
    if (downloadCount >= 2) {
      e.preventDefault();
      confirmModal.classList.add("show");
    } else {
      downloadCount++;
      showToast();
    }
  });
}

if (btnYes) {
  btnYes.addEventListener("click", function () {
    confirmModal.classList.remove("show");
    downloadCount++;
    showToast();

    const link = document.createElement("a");
    link.href = btnDownload.href;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

if (btnNo) {
  btnNo.addEventListener("click", function () {
    confirmModal.classList.remove("show");
  });
}
