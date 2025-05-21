// External JS for form validation
(function() {
    'use strict';
    const form = document.getElementById('purchaseForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
      } else {
        document.getElementById('successMessage').classList.remove('d-none');
        form.reset();
        form.classList.remove('was-validated');
      }
    }, false);
  })();