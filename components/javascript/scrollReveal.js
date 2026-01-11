export default function initScrollReveal(options = {}) {
  const { threshold = 0.15, selector = ".hidden" } = options;

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
      threshold: threshold,
    }
  );

  const hiddenElements = document.querySelectorAll(selector);
  hiddenElements.forEach((el) => observer.observe(el));
}
