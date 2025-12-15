// reviews.js
// Handles review form interactions and submitting reviews

(function() {
  'use strict';

  const diningHalls = ['brockway', 'ernie_davis', 'graham', 'orange', 'sadler', 'shaw'];

  // Initialize event listeners
  function init() {
    diningHalls.forEach(hall => {
      const addBtn = document.querySelector(`.add-review-btn[data-hall="${hall}"]`);
      const form = document.querySelector(`#review-form-${hall}`);
      const closeBtn = form.querySelector('.form-close');
      const submitBtn = form.querySelector(`.submit-review-btn[data-hall="${hall}"]`);
      const starInputs = form.querySelectorAll('.star-input');
      const ratingDisplay = form.querySelector('.rating-display');

      if (addBtn) {
        addBtn.addEventListener('click', () => {
          form.classList.remove('hidden');
          resetForm(form);
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          form.classList.add('hidden');
        });
      }

      // Star rating input
      let selectedRating = 0;
      starInputs.forEach(star => {
        star.addEventListener('click', () => {
          selectedRating = parseInt(star.getAttribute('data-value'), 10);
          updateStarDisplay(starInputs, selectedRating);
          ratingDisplay.textContent = `${selectedRating} star${selectedRating !== 1 ? 's' : ''}`;
        });

        star.addEventListener('mouseenter', () => {
          const hoverRating = parseInt(star.getAttribute('data-value'), 10);
          updateStarDisplay(starInputs, hoverRating, true);
        });
      });

      form.addEventListener('mouseleave', () => {
        updateStarDisplay(starInputs, selectedRating);
      });

      // Submit review
      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          const comment = document.querySelector(`#comment-${hall}`).value.trim();
          
          if (selectedRating === 0) {
            alert('Please select a rating');
            return;
          }

          if (!comment) {
            alert('Please add a comment');
            return;
          }

          submitReview(hall, selectedRating, comment, form);
        });
      }
    });

    // Close form when clicking outside
    document.addEventListener('click', (e) => {
      diningHalls.forEach(hall => {
        const form = document.querySelector(`#review-form-${hall}`);
        const addBtn = document.querySelector(`.add-review-btn[data-hall="${hall}"]`);
        if (form && !form.classList.contains('hidden') && !form.contains(e.target) && e.target !== addBtn) {
          form.classList.add('hidden');
        }
      });
    });
  }

  function updateStarDisplay(stars, rating, isHover = false) {
    stars.forEach((star, idx) => {
      if (idx < rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }

  function resetForm(form) {
    form.querySelector('textarea').value = '';
    const stars = form.querySelectorAll('.star-input');
    stars.forEach(star => star.classList.remove('selected'));
    form.querySelector('.rating-display').textContent = '0 stars';
  }

  function submitReview(hall, rating, comment, form) {
    // Send to backend
    const formData = new FormData();
    formData.append('hall', hall);
    formData.append('rating', rating);
    formData.append('comment', comment);

    fetch('../dining.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Add comment to quotes section
        const quotesSection = document.querySelector(`#quotes-${hall}`);
        const newQuote = document.createElement('p');
        newQuote.className = 'quote';
        newQuote.textContent = `"${comment}"`;
        quotesSection.appendChild(newQuote);

        // Close form and show success
        form.classList.add('hidden');
        alert('Review submitted! Thank you for your feedback.');

        // Reload ratings to show updated average
        location.reload();
      } else {
        alert('Error submitting review: ' + (data.message || 'Unknown error'));
      }
    })
    .catch(err => {
      console.error('Error:', err);
      alert('Error submitting review. Please try again.');
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
