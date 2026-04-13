const form = document.getElementById('contactForm');
const successBanner = document.getElementById('successBanner');

// ── Validation helpers ────────────────────────────────────
const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isValidPhone  = v => !v || /^[+\d][\d\s\-().]{6,19}$/.test(v.trim());

function setError(groupId, hasError) {
  document.getElementById(groupId).classList.toggle('error', hasError);
}

// ── Live clearing on input ────────────────────────────────
['name', 'email', 'phone', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    document.getElementById('group-' + id).classList.remove('error');
  });
});

// ── Submit ────────────────────────────────────────────────
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const phone   = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  let valid = true;

  if (!name.trim()) {
    setError('group-name', true); valid = false;
  }
  if (!isValidEmail(email)) {
    setError('group-email', true); valid = false;
  }
  if (!isValidPhone(phone)) {
    setError('group-phone', true); valid = false;
  }
  if (!message.trim()) {
    setError('group-message', true); valid = false;
  }

  if (!valid) return;

  // ── Replace this block with your actual form submission ──
  form.style.display = 'none';
  successBanner.classList.add('visible');
});
