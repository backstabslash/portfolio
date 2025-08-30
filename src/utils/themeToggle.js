const themeToggle = () => {
  const themeToggleBtns = document.querySelectorAll('#theme-toggle');

  const theme = localStorage.getItem('theme');

  theme && document.body.classList.add(theme);

  const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

  themeToggleBtns.forEach((btn) => btn.addEventListener('click', handleThemeToggle));
};

export default themeToggle;
