const checklist = document.querySelector('[data-checklist-items]');

if (checklist) {
  const items = [...checklist.querySelectorAll('[data-check-item]')];
  const count = document.querySelector('[data-checklist-count]');
  const progressBar = document.querySelector('[data-progress-bar]');
  const progressTrack = document.querySelector('[data-progress-track]');
  const caption = document.querySelector('[data-progress-caption]');
  const reset = document.querySelector('[data-checklist-reset]');

  const update = () => {
    const completed = items.filter((item) => item.checked).length;
    const percent = (completed / items.length) * 100;
    count.textContent = String(completed);
    progressBar.style.width = `${percent}%`;
    progressTrack.setAttribute('aria-valuenow', String(completed));
    caption.textContent = completed === 0 ? 'Start with one small step.' : completed === items.length ? 'A strong baseline, built one habit at a time.' : `${items.length - completed} ${items.length - completed === 1 ? 'habit' : 'habits'} left to review.`;
  };

  items.forEach((item) => item.addEventListener('change', update));
  reset?.addEventListener('click', () => {
    items.forEach((item) => { item.checked = false; });
    update();
  });
  update();
}
