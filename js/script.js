document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.animated-underline');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  targets.forEach(el => observer.observe(el));
});
