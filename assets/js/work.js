/**
 * PROSPIRA OFFICE — Work & Portfolio Case Studies Module
 * Updated for https://prospira-agency-iuzt.vercel.app/ color system
 */

const DEMO_PROJECTS = [
  {
    id: 'nexuspay',
    title: 'NexusPay Enterprise',
    category: 'web-apps',
    categoryLabel: 'Web Applications & FinTech',
    summary: 'A high-throughput cross-border treasury management platform handling multi-currency ledger settlements and real-time fraud mitigation.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'AWS ECS'],
    client: 'FinTech Demo Partner',
    timeline: '14 Weeks Delivery',
    challenge: 'Enterprise treasury operations were bogged down by latency in foreign exchange settlements and legacy fragmented accounting APIs.',
    solution: 'Engineered an event-driven microservices architecture with Next.js dashboard UI, real-time WebSocket ledger updates, and automated reconciliation pipelines.',
    impact: ['350ms average transaction settlement', '99.99% system availability', '$4.2M/day simulated test throughput']
  },
  {
    id: 'aurahealth',
    title: 'Aura Health AI',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Applications & AI',
    summary: 'An intelligent preventative biometric tracking app utilizing on-device machine learning models for personalized wellness forecasts.',
    tags: ['Flutter', 'iOS Swift', 'Python ML', 'FastAPI', 'HealthKit API'],
    client: 'HealthTech Demo Venture',
    timeline: '12 Weeks Delivery',
    challenge: 'Users required offline-first biometric processing without sacrificing battery longevity or sensitive patient privacy standards.',
    solution: 'Implemented edge-computed CoreML/TFLite models with end-to-end encrypted cloud synchronization and sleek tactile UI interactions.',
    impact: ['4.9★ Test User Rating', '45% increase in daily habit retention', 'Zero biometric data leaks']
  },
  {
    id: 'chronos',
    title: 'Chronos 3D Engine',
    category: 'game-dev',
    categoryLabel: 'Game Development & WebGL',
    summary: 'A browser-based interactive 3D spatial visualizer and simulator for real-time architectural environments and virtual product exploration.',
    tags: ['Three.js', 'WebGL', 'WebGPU', 'TypeScript', 'GLSL Shaders'],
    client: 'Spatial Demo Studio',
    timeline: '10 Weeks Delivery',
    challenge: 'Rendering high-polygon interactive CAD assets directly inside mobile and desktop web browsers without dropping below 60 FPS.',
    solution: 'Designed custom level-of-detail (LOD) geometry streaming algorithms and physically-based rendering (PBR) shader pipelines.',
    impact: ['Consistent 60+ FPS across mobile & desktop', 'Under 3s initial bundle load', 'Cross-browser WebGL2 support']
  },
  {
    id: 'synthetix',
    title: 'Synthetix Operations',
    category: 'ai-automation',
    categoryLabel: 'AI Automation & Agents',
    summary: 'Autonomous AI customer resolution and document routing agents delivering intelligent zero-touch workflows for modern logistics.',
    tags: ['Python', 'LangChain', 'FastAPI', 'Redis', 'Docker', 'OpenAI API'],
    client: 'Logistics Demo Corp',
    timeline: '8 Weeks Delivery',
    challenge: 'Support teams spent 70% of manual effort categorizing customs invoices and answering repetitive logistics dispatch queries.',
    solution: 'Deployed custom multi-agent orchestration systems with retrieval-augmented generation (RAG) and human-in-the-loop review guards.',
    impact: ['82% automated resolution rate', '7.4 hours saved per representative daily', '< 15s average ticket routing']
  },
  {
    id: 'velocemobility',
    title: 'Veloce Mobility Design System',
    category: 'ui-ux',
    categoryLabel: 'UI/UX Design & Research',
    summary: 'An end-to-end design system, accessibility audit, and multi-platform component library for an electric vehicle fleet network.',
    tags: ['Figma', 'Design Systems', 'WCAG 2.1 AAA', 'Interactive Prototyping'],
    client: 'CleanTech Demo Group',
    timeline: '9 Weeks Delivery',
    challenge: 'Inconsistent design artifacts across cockpit touchscreens, mobile driver apps, and enterprise web portals created user friction.',
    solution: 'Constructed an atomic design token architecture with dark-mode optimized high-contrast components and haptic response guidelines.',
    impact: ['100% WCAG AAA accessibility compliance', '2x faster engineering UI implementation', 'Standardized across 4 platforms']
  },
  {
    id: 'stratacommerce',
    title: 'Strata Headless Commerce',
    category: 'web-dev',
    categoryLabel: 'Web Development & Performance',
    summary: 'A sub-second headless digital storefront built for luxury lifestyle brands with international localization and high peak traffic.',
    tags: ['React', 'Next.js SSG', 'Tailwind CSS', 'Shopify Storefront API', 'Edge CDN'],
    client: 'Retail Demo Brand',
    timeline: '10 Weeks Delivery',
    challenge: 'Monolithic legacy eCommerce platform suffered from 4.8s initial load times and severe cart abandonment on mobile devices.',
    solution: 'Engineered an edge-cached Next.js headless architecture with instant optimistic cart updates and personalized catalog filters.',
    impact: ['98/100 Google Lighthouse Score', '0.6s Average LCP', '34% projected conversion lift']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilters();
  initProjectModals();
});

function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initProjectModals() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalSummary = document.getElementById('modalSummary');
  const modalChallenge = document.getElementById('modalChallenge');
  const modalSolution = document.getElementById('modalSolution');
  const modalTags = document.getElementById('modalTags');
  const modalImpact = document.getElementById('modalImpact');

  const openProject = (projectId) => {
    const project = DEMO_PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalBadge) modalBadge.textContent = `${project.categoryLabel} • ${project.timeline}`;
    if (modalSummary) modalSummary.textContent = project.summary;
    if (modalChallenge) modalChallenge.textContent = project.challenge;
    if (modalSolution) modalSolution.textContent = project.solution;

    if (modalTags) {
      modalTags.innerHTML = project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    }

    if (modalImpact) {
      modalImpact.innerHTML = project.impact.map(i => `
        <div style="background: #FFFFFF; border: 1px solid var(--color-border); padding: 1rem; border-radius: var(--radius-sm);">
          <div style="color: var(--color-primary); font-weight: 800; font-family: var(--font-headline); font-size: 1.05rem; margin-bottom: 0.25rem;">✓ Key Outcome</div>
          <div style="color: var(--color-foreground); font-size: 0.9rem;">${i}</div>
        </div>
      `).join('');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-project-trigger]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.getAttribute('data-project-trigger');
      openProject(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}
