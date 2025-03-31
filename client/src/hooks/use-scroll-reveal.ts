export function initScrollReveal() {
  if (typeof window !== "undefined" && 'IntersectionObserver' in window) {
    // Set up intersection observer for fade-in animations
    const sections = document.querySelectorAll('.section-fade');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
