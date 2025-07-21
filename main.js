// Simple success message for the contact form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const success = document.querySelector('.form-success');
  if (form) {
    form.addEventListener('submit', function (e) {
      setTimeout(() => {
        success.style.display = 'block';
        form.reset();
      }, 500);
    });
  }
});