const toggle = document.getElementById('theme-toggle');
const dashboard = document.getElementById('dashboard');

if (localStorage.getItem('dashboard-theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
}

toggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dashboard-theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dashboard-theme', 'light');
  }
});
