// icons
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon')

// theme vars
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// icon toggling

const iconToggle = () => {
  moonIcon.classList.toggle('hidden');
  sunIcon.classList.toggle('hidden');
};

// initial theme check


const themeCheck = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('hidden');

    console.log(userTheme)
    console.log(systemTheme);
    console.log(moonIcon.classList);
    return;
  }
  
  sunIcon.classList.add('hidden');
};

// manual theme switch

const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
};

// call theme switch on clicking buttons

sunIcon.addEventListener('click', () => {
  themeSwitch();
});

moonIcon.addEventListener('click', () => {
  themeSwitch();
});

// invoke theme check on initial load

themeCheck();
