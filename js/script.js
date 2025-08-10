(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault();
          alert('Appointment booked successfully!');
          const modal = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
          modal.hide();
          form.reset();
        }
        form.classList.add('was-validated')
      }, false)
})
})()