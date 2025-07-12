// ==========================
// 1. Reveal Sections on Scroll
// ==========================
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// ==========================
// 2. Scroll-to-Top Button
// ==========================
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================
// 3. Shrink Hero Header on Scroll
// ==========================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    hero.classList.add('shrink');
  } else {
    hero.classList.remove('shrink');
  }
});

// ==========================
// 4. Smooth Scroll for Navigation with Offset
// ==========================
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
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

// ==========================
// 5. Gradual Fade of Hero Text and Profile Pic on Scroll
// ==========================
const heroText = document.querySelector('.hero-text');
const profilePic = document.querySelector('.profile-pic');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = 400; // Customize this value to slow down/speed up the fade
  const progress = Math.min(scrollTop / maxScroll, 1); // Range: 0 to 1

  const newOpacity = 1 - progress;

  profilePic.style.opacity = newOpacity.toFixed(2);
  heroText.style.opacity = newOpacity.toFixed(2);
  heroText.style.visibility = newOpacity === 0 ? 'hidden' : 'visible';
});

// ==========================
// 6. Contact Form Submission with Formspree
// ==========================
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/myzjrala', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      alert('✅ Your message has been sent!');
      form.reset();
    } else {
      alert('❌ There was a problem. Please try again.');
    }
  } catch (error) {
    alert('❌ Error submitting form. Please try again later.');
    console.error(error);
  }
});
