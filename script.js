// Reveal sections on scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Shrink header on scroll
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    hero.classList.add('shrink');
  } else {
    hero.classList.remove('shrink');
  }
});

// Smooth scroll with navbar height offset
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    const navHeight = document.querySelector('.main-nav').offsetHeight;

    const yOffset = -navHeight;
    const y = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
});

// Gradual fade out of profile pic on scroll
const profilePic = document.querySelector('.profile-pic');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const heroHeight = heroSection.offsetHeight;
  const scrollTop = window.scrollY;

  const progress = Math.min(scrollTop / heroHeight, 1);
  const opacity = 1 - progress;

  profilePic.style.opacity = opacity.toFixed(2);
});
