/**
 * PROSPIRA OFFICE — Contact & Project Brief Submission Engine
 * Updated for https://prospira-agency-iuzt.vercel.app/ color system
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  prefillFromQuery();
});

function prefillFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedService = urlParams.get('service');
  if (!requestedService) return;

  const select = document.getElementById('serviceSelect');
  const chips = document.querySelectorAll('[data-service-chip]');

  if (select) {
    for (let opt of select.options) {
      if (opt.value.toLowerCase().includes(requestedService.toLowerCase()) || 
          requestedService.toLowerCase().includes(opt.value.toLowerCase())) {
        select.value = opt.value;
        break;
      }
    }
  }

  chips.forEach(chip => {
    const val = chip.getAttribute('data-service-chip');
    if (val.toLowerCase().includes(requestedService.toLowerCase()) || 
        requestedService.toLowerCase().includes(val.toLowerCase())) {
      chip.classList.add('active');
    }
  });
}

function initContactForm() {
  const form = document.getElementById('projectInquiryForm');
  if (!form) return;

  const serviceSelect = document.getElementById('serviceSelect');
  const serviceChips = document.querySelectorAll('[data-service-chip]');
  const budgetChips = document.querySelectorAll('[data-budget-chip]');
  const budgetInput = document.getElementById('budgetInput');
  const submitBtn = form.querySelector('button[type="submit"]');
  const feedbackModal = document.getElementById('submissionModal');

  // Synchronize Service Chips with Select Dropdown
  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      serviceChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const val = chip.getAttribute('data-service-chip');
      if (serviceSelect) {
        serviceSelect.value = val;
      }
    });
  });

  if (serviceSelect) {
    serviceSelect.addEventListener('change', () => {
      serviceChips.forEach(chip => {
        if (chip.getAttribute('data-service-chip') === serviceSelect.value) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });
    });
  }

  // Budget Range Chips
  budgetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      budgetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (budgetInput) {
        budgetInput.value = chip.getAttribute('data-budget-chip');
      }
    });
  });

  // Submission Validation & State Machine
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="fullName"]')?.value.trim();
    const email = form.querySelector('[name="email"]')?.value.trim();
    const company = form.querySelector('[name="company"]')?.value.trim();
    const service = serviceSelect?.value;
    const message = form.querySelector('[name="message"]')?.value.trim();

    if (!name || name.length < 2) {
      alert('Please enter your full name (at least 2 characters).');
      form.querySelector('[name="fullName"]')?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please provide a valid work email address.');
      form.querySelector('[name="email"]')?.focus();
      return;
    }

    if (!company) {
      alert('Please enter your company or organization name.');
      form.querySelector('[name="company"]')?.focus();
      return;
    }

    if (!service) {
      alert('Please select a service focus for your project.');
      serviceSelect?.focus();
      return;
    }

    if (!message || message.length < 10) {
      alert('Please provide a brief description of your project requirements (at least 10 characters).');
      form.querySelector('[name="message"]')?.focus();
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" style="width: 20px; height: 20px; animation: spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Processing Transmission...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const refNumber = 'PO-' + Math.floor(10000 + Math.random() * 90000);
      const confRef = document.getElementById('confRef');
      const confName = document.getElementById('confName');
      const confService = document.getElementById('confService');

      if (confRef) confRef.textContent = refNumber;
      if (confName) confName.textContent = name;
      if (confService) confService.textContent = service;

      if (feedbackModal) {
        feedbackModal.classList.add('open');
      }

      form.reset();
      serviceChips.forEach(c => c.classList.remove('active'));
      budgetChips.forEach(c => c.classList.remove('active'));
    }, 900);
  });

  if (feedbackModal) {
    const closeBtn = feedbackModal.querySelector('.modal-close');
    const actionBtn = feedbackModal.querySelector('.modal-action-close');

    const closeModal = () => feedbackModal.classList.remove('open');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (actionBtn) actionBtn.addEventListener('click', closeModal);
    feedbackModal.addEventListener('click', (e) => {
      if (e.target === feedbackModal) closeModal();
    });
  }
}
