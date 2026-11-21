/**
 * LUXE LIVING — Global Application & Interaction Controller
 * Handles Revolution Slider, Cart Drawer, Quick View Modal, Consultation Booking,
 * Form Validation, WhatsApp Integration, and Toast Notifications.
 */

// Global Configuration (Easily Editable)
window.LuxeConfig = {
  brandName: "Luxe Living",
  phone: "+1 (800) 589-3548",
  phoneRaw: "18005893548",
  whatsappNumber: "18005893548", // Editable WhatsApp Business Number
  email: "concierge@luxeliving.com",
  showroomAddress: "740 Madison Avenue, New York, NY 10065",
  freeShippingThreshold: 5000,
  currencySymbol: "$"
};

// Global Store / State
const LuxeState = {
  cart: JSON.parse(localStorage.getItem('luxeliving_cart')) || [
    {
      id: 'aurelia-sectional',
      name: 'The Aurelia Velvet Sectional',
      price: 7850,
      finish: 'Deep Emerald Velvet',
      qty: 1,
      image: 'assets/images/hero-slide-1.jpg'
    }
  ],
  products: [
    {
      id: 'aurelia-sectional',
      name: 'The Aurelia Velvet Sectional',
      category: 'living',
      price: 7850,
      badge: 'Signature Piece',
      image: 'assets/images/hero-slide-1.jpg',
      description: 'Masterfully tailored modular sofa upholstered in plush deep emerald velvet, anchored with a brushed champagne brass plinth.',
      dimensions: 'W 340cm x D 195cm x H 78cm',
      materials: 'Hand-stretched Italian velvet, kiln-dried FSC European beechwood frame, high-resilience down-blend cushioning.',
      finishes: [
        { name: 'Deep Emerald Velvet', hex: '#0B3D2E' },
        { name: 'Obsidian Velvet', hex: '#111111' },
        { name: 'Warm Taupe Bouclé', hex: '#756B60' }
      ]
    },
    {
      id: 'sovereign-dining-table',
      name: 'Sovereign Calacatta Marble Dining Table',
      category: 'dining',
      price: 6400,
      badge: 'Artisanal Made',
      image: 'assets/images/hero-slide-2.jpg',
      description: 'Sculptural Calacatta Viola marble monolithic top with chamfered bullnose edge, resting upon twin fluted bronze-wrapped pedestals.',
      dimensions: 'L 280cm x W 115cm x H 76cm',
      materials: 'Book-matched Italian Calacatta Viola marble, matte protective sealer, cast architectural bronze pedestals.',
      finishes: [
        { name: 'Calacatta Viola', hex: '#582B35' },
        { name: 'Nero Marquina', hex: '#1C1C1C' },
        { name: 'Carrara Pure White', hex: '#EAE6DF' }
      ]
    },
    {
      id: 'elysian-accent-chair',
      name: 'Elysian Swivel Lounge Chair',
      category: 'accent',
      price: 2950,
      badge: 'Curated Icon',
      image: 'assets/images/product-chair.jpg',
      description: 'Organic sculptural curve offering enveloping comfort. Features smooth 360-degree silent swivel in champagne gold brushed satin.',
      dimensions: 'W 88cm x D 84cm x H 74cm',
      materials: 'Textured ivory merino-wool bouclé, inner cold-cured foam, satin brass swivel base.',
      finishes: [
        { name: 'Warm Ivory Bouclé', hex: '#F4EFE6' },
        { name: 'Deep Emerald Velvet', hex: '#0B3D2E' },
        { name: 'Charcoal Cashmere', hex: '#2A2A2A' }
      ]
    },
    {
      id: 'belvedere-media-console',
      name: 'Belvedere Fluted Media Credenza',
      category: 'living',
      price: 4200,
      badge: 'Showroom Featured',
      image: 'assets/images/showroom-reference.jpg',
      description: 'Inspired directly by our flagship showroom interior. Low-profile credenza featuring fluted smoked oak, honed grey marble top, and champagne gold legs.',
      dimensions: 'W 240cm x D 48cm x H 52cm',
      materials: 'Honed Italian grey marble, solid smoked European oak, champagne gold brushed alloy feet.',
      finishes: [
        { name: 'Smoked Oak & Grey Marble', hex: '#4A433B' },
        { name: 'Ebonized Ash & Nero Marble', hex: '#1A1A1A' }
      ]
    },
    {
      id: 'palazzo-platform-bed',
      name: 'Palazzo Channel-Tufted Bed',
      category: 'bedroom',
      price: 5600,
      badge: 'Bespoke Order',
      image: 'assets/images/hero-slide-3.jpg',
      description: 'A sanctuary of modern luxury. Architectural floor-extended channel-tufted headboard with integrated brushed brass reading sconces.',
      dimensions: 'W 230cm x L 225cm x H 140cm (King)',
      materials: 'Rich emerald velvet or taupe cashmere, acoustic padded interior, solid walnut slatted platform.',
      finishes: [
        { name: 'Emerald Velvet', hex: '#0B3D2E' },
        { name: 'Warm Taupe Cashmere', hex: '#756B60' },
        { name: 'Ivory Linen Weave', hex: '#F4EFE6' }
      ]
    },
    {
      id: 'vesper-alabaster-chandelier',
      name: 'Vesper Tiered Alabaster Chandelier',
      category: 'decor',
      price: 3450,
      badge: 'Limited Edition',
      image: 'assets/images/product-lighting.jpg',
      description: 'Naturally veined Spanish alabaster disks suspended in a cascading geometric formation on hand-rubbed champagne gold stems.',
      dimensions: 'Diameter 90cm x Drop Height 120cm (Adjustable)',
      materials: 'Natural carved Spanish alabaster, warm 2700K integrated LEDs, hand-rubbed satin brass.',
      finishes: [
        { name: 'Satin Champagne Brass', hex: '#C5A46D' },
        { name: 'Smoked Gunmetal', hex: '#2E2E2E' }
      ]
    },
    {
      id: 'marquina-coffee-table',
      name: 'Bespoke Nero Marquina Coffee Table',
      category: 'living',
      price: 3100,
      badge: 'Natural Stone',
      image: 'assets/images/product-coffee-table.jpg',
      description: 'Low-profile monolithic silhouette with rounded chamfer corners and soft-touch satin finish that showcases striking natural white veining.',
      dimensions: 'W 140cm x D 75cm x H 38cm',
      materials: 'Spanish Nero Marquina marble, internal honeycomb composite for stability, felt glides.',
      finishes: [
        { name: 'Nero Marquina', hex: '#181818' },
        { name: 'Calacatta Warm Gold', hex: '#EDE8DF' }
      ]
    },
    {
      id: 'verona-side-table',
      name: 'Verona Occasional Sculptural Table',
      category: 'accent',
      price: 1750,
      badge: 'Sculptural Art',
      image: 'assets/images/product-side-table.jpg',
      description: 'An architectural dialogue between cast champagne bronze and smoked tempered glass. Ideal companion for accent seating.',
      dimensions: 'Diameter 50cm x H 55cm',
      materials: 'Cast bronze plinth, 12mm smoked grey tempered safety glass, silicone dampers.',
      finishes: [
        { name: 'Champagne Bronze', hex: '#C5A46D' },
        { name: 'Obsidian Black Patina', hex: '#1C1C1C' }
      ]
    }
  ]
};

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroSlider();
  initCollectionsAndFilter();
  initCartDrawer();
  initModals();
  initForms();
  initWhatsAppButtons();
  initBackToTop();
  updateCartBadge();
});

/* ==========================================================================
   Header & Mobile Navigation
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  // Sticky blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggleBtn && mobileDrawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   REVOLUTION SLIDER CONTROLLER
   Layered Staggered Animations, Ken Burns, Timer Progress Bar, Touch Gestures
   ========================================================================== */
function initHeroSlider() {
  const slider = document.querySelector('.hero-slider-section');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const progressBar = slider.querySelector('.slider-progress-fill');
  const currentNumEl = slider.querySelector('.slide-number');
  const dots = slider.querySelectorAll('.slider-dot');
  const prevBtn = slider.querySelector('.slider-prev');
  const nextBtn = slider.querySelector('.slider-next');

  if (!slides.length) return;

  let currentIndex = 0;
  const slideDuration = 7500; // 7.5 seconds
  let slideTimer = null;
  let progressStart = 0;
  let progressAnimFrame = null;
  let isPaused = false;

  function goToSlide(index) {
    slides[currentIndex].classList.remove('is-active');
    if (dots[currentIndex]) dots[currentIndex].classList.remove('is-active');

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('is-active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('is-active');

    if (currentNumEl) {
      currentNumEl.textContent = `0${currentIndex + 1}`;
    }

    resetTimer();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function resetTimer() {
    cancelAnimationFrame(progressAnimFrame);
    if (slideTimer) clearTimeout(slideTimer);

    if (progressBar) progressBar.style.width = '0%';
    progressStart = performance.now();

    function updateProgress(now) {
      if (isPaused) {
        progressAnimFrame = requestAnimationFrame(updateProgress);
        return;
      }
      const elapsed = now - progressStart;
      const pct = Math.min((elapsed / slideDuration) * 100, 100);
      if (progressBar) progressBar.style.width = `${pct}%`;

      if (elapsed < slideDuration) {
        progressAnimFrame = requestAnimationFrame(updateProgress);
      } else {
        nextSlide();
      }
    }

    progressAnimFrame = requestAnimationFrame(updateProgress);
  }

  // Event Listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToSlide(idx));
  });

  // Pause on hover
  slider.addEventListener('mouseenter', () => { isPaused = true; });
  slider.addEventListener('mouseleave', () => { isPaused = false; });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Start slider
  goToSlide(0);
}

/* ==========================================================================
   Collections & Filterable Product Catalog
   ========================================================================== */
function initCollectionsAndFilter() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');

      const filterCategory = pill.dataset.filter;

      productCards.forEach(card => {
        if (filterCategory === 'all' || card.dataset.category === filterCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Shopping Cart Engine (Drawer, Badge, LocalStorage, Concierge Checkout)
   ========================================================================== */
function initCartDrawer() {
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartCloseBtn = document.querySelector('.cart-close-btn');
  const cartItemsList = document.querySelector('.cart-items-list');
  const cartEmptyState = document.querySelector('.cart-empty-state');
  const subtotalEl = document.querySelector('.cart-subtotal-val');
  const totalEl = document.querySelector('.cart-total-val');
  const checkoutBtn = document.querySelector('.cart-checkout-btn');

  function openCart() {
    cartOverlay?.classList.add('is-open');
    cartDrawer?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderCart();
  }

  function closeCart() {
    cartOverlay?.classList.remove('is-open');
    cartDrawer?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  cartToggleBtns.forEach(btn => btn.addEventListener('click', openCart));
  cartCloseBtn?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  // Expose global openCart
  window.openCartDrawer = openCart;

  // Render items inside drawer
  function renderCart() {
    if (!cartItemsList) return;

    if (LuxeState.cart.length === 0) {
      cartItemsList.innerHTML = '';
      if (cartEmptyState) cartEmptyState.style.display = 'block';
      if (subtotalEl) subtotalEl.textContent = '$0';
      if (totalEl) totalEl.textContent = '$0';
      return;
    }

    if (cartEmptyState) cartEmptyState.style.display = 'none';

    let total = 0;
    cartItemsList.innerHTML = LuxeState.cart.map((item, index) => {
      const itemSubtotal = item.price * item.qty;
      total += itemSubtotal;
      return `
        <div class="cart-item" data-index="${index}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='assets/images/showroom-reference.jpg'" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-variant">${item.finish || 'Standard Finish'}</div>
            <div class="cart-item-price">$${item.price.toLocaleString()}</div>
            <div class="cart-item-controls">
              <div class="cart-qty-wrap">
                <button class="cart-qty-btn qty-minus" onclick="updateCartItemQty(${index}, -1)">–</button>
                <span class="cart-qty-val">${item.qty}</span>
                <button class="cart-qty-btn qty-plus" onclick="updateCartItemQty(${index}, 1)">+</button>
              </div>
              <button class="cart-remove-btn" onclick="removeCartItem(${index})">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `$${total.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `$${total.toLocaleString()}`;
    updateCartBadge();
  }

  // Handle Checkout click -> open Concierge Checkout Integration Brief Modal
  checkoutBtn?.addEventListener('click', () => {
    closeCart();
    openCheckoutModal();
  });

  // Global listeners for Add to Cart buttons
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.dataset.productId;
      const product = LuxeState.products.find(p => p.id === productId);
      if (product) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          finish: product.finishes[0]?.name || 'Signature Finish',
          image: product.image,
          qty: 1
        });
      }
    });
  });

  window.renderCartDrawer = renderCart;
}

// Global Cart Actions
window.addToCart = function(item) {
  const existingIndex = LuxeState.cart.findIndex(i => i.id === item.id && i.finish === item.finish);
  if (existingIndex > -1) {
    LuxeState.cart[existingIndex].qty += (item.qty || 1);
  } else {
    LuxeState.cart.push({ ...item, qty: item.qty || 1 });
  }

  localStorage.setItem('luxeliving_cart', JSON.stringify(LuxeState.cart));
  updateCartBadge();
  if (window.renderCartDrawer) window.renderCartDrawer();
  showToast(`${item.name} added to your shopping bag.`);
  if (window.openCartDrawer) window.openCartDrawer();
};

window.updateCartItemQty = function(index, delta) {
  if (!LuxeState.cart[index]) return;
  LuxeState.cart[index].qty += delta;
  if (LuxeState.cart[index].qty <= 0) {
    LuxeState.cart.splice(index, 1);
  }
  localStorage.setItem('luxeliving_cart', JSON.stringify(LuxeState.cart));
  if (window.renderCartDrawer) window.renderCartDrawer();
  updateCartBadge();
};

window.removeCartItem = function(index) {
  if (!LuxeState.cart[index]) return;
  const removed = LuxeState.cart.splice(index, 1);
  localStorage.setItem('luxeliving_cart', JSON.stringify(LuxeState.cart));
  if (window.renderCartDrawer) window.renderCartDrawer();
  updateCartBadge();
  if (removed[0]) showToast(`${removed[0].name} removed from your bag.`);
};

function updateCartBadge() {
  const totalCount = LuxeState.cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

/* ==========================================================================
   Modals: Quick View, Consultation Booking, Checkout Pipeline
   ========================================================================== */
function initModals() {
  // Quick View triggers
  document.querySelectorAll('.product-quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.dataset.productId;
      openQuickViewModal(productId);
    });
  });

  // Modal Backdrop Click to Close
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }
  });

  // ESC key to close any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.is-open').forEach(closeModal);
    }
  });

  // Global "Book Consultation" triggers
  document.querySelectorAll('.btn-book-consultation').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.dataset.service || 'General Furniture & Interior Consultation';
      openBookingModal(serviceName);
    });
  });
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('is-open');
  document.body.style.overflow = '';
}

function openQuickViewModal(productId) {
  const product = LuxeState.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.querySelector('#quickViewModal');
  if (!modal) return;

  let selectedFinish = product.finishes[0]?.name || 'Signature';

  modal.querySelector('.quickview-title').textContent = product.name;
  modal.querySelector('.quickview-category').textContent = product.category.toUpperCase();
  modal.querySelector('.quickview-price').textContent = `$${product.price.toLocaleString()}`;
  modal.querySelector('.quickview-desc').textContent = product.description;
  modal.querySelector('.quickview-dimensions').textContent = product.dimensions;
  modal.querySelector('.quickview-materials').textContent = product.materials;

  const imgEl = modal.querySelector('.quickview-img');
  imgEl.src = product.image;
  imgEl.onerror = () => { imgEl.src = 'assets/images/showroom-reference.jpg'; };

  // Swatches
  const swatchesContainer = modal.querySelector('.quickview-swatches');
  if (swatchesContainer) {
    swatchesContainer.innerHTML = product.finishes.map((f, i) => `
      <button class="swatch-btn ${i === 0 ? 'is-active' : ''}" title="${f.name}" data-finish="${f.name}">
        <span class="swatch-inner" style="background-color: ${f.hex}"></span>
      </button>
    `).join('');

    const swatchButtons = swatchesContainer.querySelectorAll('.swatch-btn');
    swatchButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        swatchButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        selectedFinish = btn.dataset.finish;
        modal.querySelector('.selected-finish-name').textContent = selectedFinish;
      });
    });

    modal.querySelector('.selected-finish-name').textContent = selectedFinish;
  }

  // Add to Cart inside modal
  const addBtn = modal.querySelector('.quickview-add-cart-btn');
  addBtn.onclick = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      finish: selectedFinish,
      image: product.image,
      qty: 1
    });
    closeModal(modal);
  };

  openModal(modal);
}

function openBookingModal(serviceName = '') {
  const modal = document.querySelector('#bookingModal');
  if (!modal) return;

  const serviceSelect = modal.querySelector('#bookingService');
  if (serviceSelect && serviceName) {
    for (let opt of serviceSelect.options) {
      if (opt.text.toLowerCase().includes(serviceName.toLowerCase()) || opt.value.toLowerCase().includes(serviceName.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }

  openModal(modal);
}

function openCheckoutModal() {
  const modal = document.querySelector('#checkoutModal');
  if (!modal) return;

  const total = LuxeState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const checkoutItemsCount = modal.querySelector('.checkout-items-count');
  const checkoutTotal = modal.querySelector('.checkout-total');

  if (checkoutItemsCount) checkoutItemsCount.textContent = `${LuxeState.cart.reduce((sum, item) => sum + item.qty, 0)} pieces`;
  if (checkoutTotal) checkoutTotal.textContent = `$${total.toLocaleString()}`;

  openModal(modal);
}

/* ==========================================================================
   Form Handling & Robust Validation
   ========================================================================== */
function initForms() {
  // Main Contact Form
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate inputs
      const fields = [
        { id: 'contactName', test: val => val.trim().length >= 2, msg: 'Please provide your full name.' },
        { id: 'contactEmail', test: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), msg: 'Please provide a valid email address.' },
        { id: 'contactPhone', test: val => val.trim().length >= 7, msg: 'Please provide your contact telephone number.' },
        { id: 'contactSubject', test: val => val !== '', msg: 'Please select an enquiry subject.' },
        { id: 'contactMessage', test: val => val.trim().length >= 10, msg: 'Please share details of your project or enquiry.' }
      ];

      fields.forEach(f => {
        const input = document.getElementById(f.id);
        if (!input) return;
        const group = input.closest('.form-group');
        const errEl = group?.querySelector('.form-error-msg');

        if (!f.test(input.value)) {
          isValid = false;
          group?.classList.add('has-error');
          if (errEl) errEl.textContent = f.msg;
        } else {
          group?.classList.remove('has-error');
        }
      });

      if (!isValid) return;

      // Simulate submission state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending Enquiry...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        // Show Confirmation Dialog
        const confirmModal = document.querySelector('#confirmationModal');
        if (confirmModal) {
          const refCode = 'LX-' + Math.floor(100000 + Math.random() * 900000);
          confirmModal.querySelector('.enquiry-ref-code').textContent = refCode;
          openModal(confirmModal);
        } else {
          showToast('Thank you! Your private enquiry has been sent to our concierge.');
        }
      }, 1000);
    });
  }

  // Booking Form Submission
  const bookingForm = document.querySelector('#bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Securing VIP Reservation...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirm Reservation';
        closeModal(document.querySelector('#bookingModal'));
        bookingForm.reset();
        showToast('Your VIP design consultation has been successfully booked.');
      }, 900);
    });
  }

  // Newsletter Subscription Form
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.value = '';
        showToast('Welcome to the Luxe Living Private Circle.');
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  });
}

/* ==========================================================================
   WhatsApp Concierge Launcher
   ========================================================================== */
function initWhatsAppButtons() {
  document.querySelectorAll('.btn-whatsapp-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = btn.dataset.topic || 'General Luxury Furniture Enquiry';
      const text = encodeURIComponent(
        `Hello Luxe Living Atelier, I am interested in exploring: "${topic}". Please connect me with a private client concierge.`
      );
      const url = `https://wa.me/${LuxeConfig.whatsappNumber}?text=${text}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

/* ==========================================================================
   Back to Top & Toast Engine
   ========================================================================== */
function initBackToTop() {
  const bttBtn = document.querySelector('.back-to-top');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      bttBtn.classList.add('is-visible');
    } else {
      bttBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C5A46D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

window.showToast = showToast;
