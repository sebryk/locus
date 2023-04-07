export function animateScroll() {
  AOS.init({
    duration: 600,
    once: true,
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => entry.target);
    },
    {
      threshold: 0.5,
    }
  );

  const header = document.querySelectorAll('[data-id="section"]');

  header.forEach(el => observer.observe(el));
}
