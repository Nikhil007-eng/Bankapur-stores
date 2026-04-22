/**
 * XOS ADSENSE CAROUSEL — External script
 * ========================================
 * Builds banner carousel, handles auto‑slide and dot navigation.
 * Click on a banner jumps to the corresponding category.
 * Visibility is controlled by updateVisibility() based on global state.
 */

(function() {
  'use strict';

  // ---------- CONFIGURABLE BANNERS ----------
  // Change images and category IDs to match your SECTIONS
  const banners = [
    { img: "https://placehold.co/600x200/1c3f5e/white?text=📚+Single+Line+Books", category: "single-line" },
    { img: "https://placehold.co/600x200/c8401a/white?text=✏️+Pens+%26+Pencils", category: "pens-pencils" },
    { img: "https://placehold.co/600x200/2e5c3a/white?text=📓+Stationery", category: "stationery" },
    { img: "https://placehold.co/600x200/1c3f5e/white?text=📖+All+Books", category: "books" }
  ];

  let carouselInterval = null;
  let currentSlide = 0;

  // ---------- BUILD CAROUSEL (called once on load) ----------
  function buildCarousel() {
    const slidesDiv = document.getElementById('carouselSlides');
    const dotsDiv = document.getElementById('carouselDots');
    if (!slidesDiv || !dotsDiv) return;

    // Inject slides
    slidesDiv.innerHTML = banners.map((b, i) =>
      `<div class="carousel-slide" style="background-image:url('${b.img}')" data-cat="${b.category}"></div>`
    ).join('');

    // Inject dots
    dotsDiv.innerHTML = banners.map((_, i) =>
      `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
    ).join('');

    // Click on slide navigates to category
    document.querySelectorAll('.carousel-slide').forEach((slide, idx) => {
      slide.addEventListener('click', () => {
        const cat = banners[idx].category;
        if (typeof window.doCat === 'function') {
          const activePill = Array.from(document.querySelectorAll('.pill')).find(p =>
            p.textContent.trim() === (window.SECTIONS?.find(sec => sec.id === cat)?.label || cat)
          );
          if (activePill) {
            window.doCat(cat, activePill);
          } else {
            const allPill = document.querySelector('.pill');
            if (allPill) window.doCat('all', allPill);
          }
        }
      });
    });

    // Dot navigation
    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        goToSlide(idx);
        resetAutoSlide();
      });
    });

    startAutoSlide();
  }

  // ---------- SLIDE CONTROL ----------
  function goToSlide(index) {
    const slides = document.getElementById('carouselSlides');
    const dots = document.querySelectorAll('.dot');
    if (!slides || !dots.length) return;
    currentSlide = (index + banners.length) % banners.length;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startAutoSlide() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 3000); // change speed here
  }

  function resetAutoSlide() {
    clearInterval(carouselInterval);
    startAutoSlide();
  }

  // ---------- VISIBILITY CONTROL (called by main app) ----------
  function updateCarouselVisibility() {
    const carousel = document.getElementById('carouselContainer');
    if (!carousel) return;

    // Read global state set by main app
    const currentCat = window.currentCategory || 'all';
    const searchTerm = window.searchTerm || '';

    if (currentCat === 'all' && searchTerm.trim() === '') {
      carousel.classList.remove('hidden');
    } else {
      carousel.classList.add('hidden');
    }
  }

  // ---------- EXPOSE TO GLOBAL SCOPE ----------
  window.carousel = {
    build: buildCarousel,
    updateVisibility: updateCarouselVisibility,
    banners // optional, for debugging
  };

  // Auto‑build when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildCarousel);
  } else {
    buildCarousel();
  }
})();
