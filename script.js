const imageHash = location.hash.slice(1);
const changeThemeButton = document.getElementById('change-theme');
const image = document.querySelector('img');
const theme = localStorage.getItem('theme');
if (!theme) localStorage.setItem('theme', 'dark');

const textColor = theme === 'dark' ? 'white' : 'black'
changeThemeButton.style.color = textColor;
image.style.color = textColor;
document.body.style.backgroundColor = theme === 'dark' ? 'black' : 'white';

if (imageHash) {
  image.src = 'https://assets.scratch.mit.edu/get_image/.%2E/' + imageHash;
  document.title = 'Viewing image: ' + imageHash;
}


changeThemeButton.addEventListener('click', () => {
  if (theme === 'dark') {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  location.reload();
});


addEventListener('hashchange', () => {
  location.reload();
});