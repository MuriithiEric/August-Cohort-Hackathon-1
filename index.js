const html = document.getElementById('html');
const css = document.getElementById('css');
const enterpreneurship = document.getElementById('enterpreneurship');
const database = document.getElementById('database');
const webdev = document.getElementById('webdev');
const software = document.getElementById('software-engineering');
const python = document.getElementById('python');
const dart = document.getElementById('dart');

html.addEventListener('click', () => {
  html.innerHTML +=
    '<br>My HTML skill allows me to change<br> the contents of the webpage.';
});

css.addEventListener('click', () => {
  css.innerHTML +=
    '<br>My CSS skill allows me to style<br> the appearance of the webpage.';
});

enterpreneurship.addEventListener('click', () => {
  enterpreneurship.innerHTML +=
    '<br>My Enterpreneurship and personal development skill allows me to<br> develop myself as an enterpreneur.';
});

database.addEventListener('click', () => {
  database.innerHTML +=
    '<br>My Database skill allows me to store<br> and retrieve data from a database.';
});

webdev.addEventListener('click', () => {
  webdev.innerHTML +=
    '<br>My Web Development skill allows me to<br> create responsive and interactive websites.';
});

software.addEventListener('click', () => {
  software.innerHTML +=
    '<br>My Software Engineering skill allows me to<br> develop software applications.';
});

python.addEventListener('click', () => {
  python.innerHTML +=
    '<br>My Python skill allows me to<br> analyze and interpret data.';
});

dart.addEventListener('click', () => {
  dart.innerHTML +=
    '<br>My Dart skill allows me to<br> develop cross-platform applications.';
});
