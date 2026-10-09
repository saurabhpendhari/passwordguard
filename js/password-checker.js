const passwordInput = document.querySelector('#password-input');
const passwordToggle = document.querySelector('[data-password-toggle]');
const passwordReset = document.querySelector('[data-password-reset]');
const strengthLabel = document.querySelector('[data-strength-label]');
const strengthMeter = document.querySelector('[data-strength-meter]');
const strengthMessage = document.querySelector('[data-strength-message]');
const suggestionList = document.querySelector('[data-suggestion-list]');
const characterCount = document.querySelector('[data-character-count]');

if (passwordInput && strengthLabel && strengthMeter && strengthMessage && suggestionList) {
  const commonPatterns = /password|qwerty|letmein|admin|welcome|1234|abcd|college|student/i;

  const assessPassword = (value) => {
    const suggestions = [];
    if (!value) {
      return { level: 'Waiting for input', percent: 0, message: 'Start with a sample password to see a local assessment.', suggestions: ['Use 12 or more characters.', 'Mix words with numbers or symbols.', 'Skip names, dates, and common patterns.'] };
    }

    let points = 0;
    const length = value.length;
    if (length >= 12) points += 2;
    else if (length >= 8) points += 1;
    if (/[a-z]/.test(value)) points += 1;
    if (/[A-Z]/.test(value)) points += 1;
    if (/\d/.test(value)) points += 1;
    if (/[^A-Za-z0-9\s]/.test(value)) points += 1;
    if (commonPatterns.test(value) || /(.)\1{2,}/.test(value)) points -= 2;
    if (length < 12) suggestions.push('Aim for 12 or more characters.');
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) suggestions.push('Use a mix of uppercase and lowercase characters.');
    if (!/\d/.test(value) && !/[^A-Za-z0-9\s]/.test(value)) suggestions.push('Add numbers or symbols — or use a longer passphrase.');
    if (commonPatterns.test(value) || /(.)\1{2,}/.test(value)) suggestions.push('Avoid common words, sequences, and repeated characters.');

    const score = Math.max(0, Math.min(6, points));
    const levels = [
      { level: 'Weak', percent: 25, message: 'This sample would be easy to guess. Add length and avoid familiar patterns.' },
      { level: 'Fair', percent: 45, message: 'A start, but it could use more length or variety to hold up better.' },
      { level: 'Good', percent: 72, message: 'A good foundation. Make it unique to one account and consider adding length.' },
      { level: 'Strong', percent: 100, message: 'This sample has useful layers of length and variety. Keep it unique.' },
    ];
    const result = score <= 2 ? levels[0] : score <= 3 ? levels[1] : score <= 5 ? levels[2] : levels[3];
    return { ...result, suggestions: suggestions.length ? suggestions : ['Keep it unique to one account.', 'Store it in a reputable password manager if helpful.', 'Never share it in a message or form you did not expect.'] };
  };

  const render = () => {
    const result = assessPassword(passwordInput.value);
    strengthLabel.textContent = result.level;
    strengthMeter.style.width = `${result.percent}%`;
    strengthMeter.style.background = result.level === 'Weak' ? 'var(--error)' : result.level === 'Fair' ? 'var(--warning)' : 'var(--green)';
    strengthMessage.textContent = result.message;
    suggestionList.innerHTML = result.suggestions.map((suggestion) => `<li>${suggestion}</li>`).join('');
    if (characterCount) characterCount.textContent = `${passwordInput.value.length} character${passwordInput.value.length === 1 ? '' : 's'}`;
  };

  passwordInput.addEventListener('input', render);
  passwordToggle?.addEventListener('click', () => {
    const showing = passwordInput.type === 'text';
    passwordInput.type = showing ? 'password' : 'text';
    passwordToggle.textContent = showing ? 'Show' : 'Hide';
    passwordToggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    passwordToggle.setAttribute('aria-pressed', String(!showing));
    passwordInput.focus();
  });
  passwordReset?.addEventListener('click', () => {
    passwordInput.value = '';
    passwordInput.type = 'password';
    if (passwordToggle) {
      passwordToggle.textContent = 'Show';
      passwordToggle.setAttribute('aria-label', 'Show password');
      passwordToggle.setAttribute('aria-pressed', 'false');
    }
    render();
    passwordInput.focus();
  });
  render();
}
