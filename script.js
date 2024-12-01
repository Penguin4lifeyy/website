document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  const container = document.querySelector('.container');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      switch (button.textContent.trim()) {
        case 'Me':
          container.style.background = 'linear-gradient(180deg, #ff9a9e 0%, #fad0c4 100%)';
          break;
        case 'Work':
          container.style.background = 'linear-gradient(180deg, #a1c4fd 0%, #c2e9fb 100%)';
          break;
        case 'Secret':
          container.style.background = 'linear-gradient(180deg, #fbc2eb 0%, #a6c1ee 100%)';
          break;
        default:
          container.style.background = 'var(--background-gradient)';
      }
    });
  });
});