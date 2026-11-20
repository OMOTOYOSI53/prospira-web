/**
 * PROSPIRA OFFICE — Core Application & Interactive Behaviors
 * Color System matching https://prospira-agency-iuzt.vercel.app/
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initScrollProgress();
  initMobileNav();
  initScrollObserver();
  initBackToTop();
  highlightActiveNav();
});

// 1. Header Scrolled State
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const isHome = header.classList.contains('home-header');

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
      if (isHome) {
        header.classList.remove('home-header');
      }
    } else {
      header.classList.remove('scrolled');
      if (isHome) {
        header.classList.add('home-header');
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 2. Reading / Scroll Progress Bar
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight > 0) {
      const scrolled = (window.scrollY / scrollHeight) * 100;
      bar.style.width = `${Math.min(100, Math.max(0, scrolled))}%`;
    }
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// 3. Mobile Navigation Drawer
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen 
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
  });

  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
    }
  });
}

// 4. Subtle Scroll Reveal Animations
function initScrollObserver() {
  const revealElements = document.querySelectorAll('.card, .stat-card, .process-item, .project-card');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  revealElements.forEach(el => observer.observe(el));
}

// 5. Back to Top Button
function initBackToTop() {
  const topButtons = document.querySelectorAll('.back-to-top');
  topButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// 6. Highlight Active Link in Navigation
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href').toLowerCase();
    if ((currentPath === '/' || currentPath.endsWith('index.html') || currentPath === '') && (href === '/' || href === 'index.html' || href === './index.html')) {
      link.classList.add('active');
    } else if (href !== '/' && href !== 'index.html' && currentPath.includes(href.replace('.html', '').replace('./', ''))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
