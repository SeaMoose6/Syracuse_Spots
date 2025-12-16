/**
 * ratings.js
 * Fetches ratings and reviews from dining.php and renders them into the DOM.
 */
(function () {
  'use strict';

  /**
   * Renders star icons based on a numeric rating (0-5).
   * Supports filled, half-filled, and empty stars.
   */
  function renderStars(container, rating) {
    const max = 5;
    container.textContent = '';
    
    // Support half-star rounding for visual display
    const roundedRating = Math.round(rating * 2) / 2;

    for (let i = 1; i <= max; i++) {
      const span = document.createElement('span');
      
      if (i <= roundedRating) {
        span.className = 'star filled';
        span.textContent = '★';
      } else if (i - 0.5 <= roundedRating) {
        span.className = 'star half-filled';
        span.textContent = '★';
      } else {
        span.className = 'star empty';
        span.textContent = '★';
      }
      
      container.appendChild(span);
    }
    
    // Add numeric rating text
    const numSpan = document.createElement('span');
    numSpan.className = 'rating-text';
    numSpan.textContent = ` ${rating.toFixed(1)}/5`;
    container.appendChild(numSpan);
    
    container.setAttribute('aria-label', `${rating} of ${max} stars`);
    container.title = `${rating} of ${max} stars (average)`;
  }

  /**
   * Fetches JSON data from dining.php and updates the UI
   */
  async function loadAndRender() {
    try {
      // Fetch data from the PHP backend
      const res = await fetch('../dining.php', { cache: 'no-cache' });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const ratingsData = await res.json();

      // Find every element with a data-hall attribute
      const els = document.querySelectorAll('.rating[data-hall]');
      
      els.forEach(el => {
        const hall = (el.getAttribute('data-hall') || '').trim();
        
        // Get data for this hall, or use defaults if no data exists yet
        const data = ratingsData[hall] || { avg: 0, reviews: [] };
        
        // 1. Render the stars
        renderStars(el, parseFloat(data.avg));

        // 2. Render the reviews/quotes
        const quotesContainer = document.querySelector(`#quotes-${hall}`);
        if (quotesContainer) {
          // Clear any hardcoded placeholders
          quotesContainer.innerHTML = ''; 
          
          if (data.reviews.length > 0) {
            data.reviews.forEach(reviewText => {
              const p = document.createElement('p');
              p.className = 'quote';
              p.textContent = `"${reviewText}"`;
              quotesContainer.appendChild(p);
            });
          } else {
            // Optional: placeholder if no reviews exist
            quotesContainer.innerHTML = '<p class="quote"><em>No reviews yet. Be the first!</em></p>';
          }
        }
      });

    } catch (e) {
      console.error('ratings.js: Error loading data from database', e);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndRender);
  } else {
    loadAndRender();
  }

})();