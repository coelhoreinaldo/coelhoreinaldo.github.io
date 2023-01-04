const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon')

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


const iconToggle = () => {
  moonIcon.classList.toggle('hidden');
  sunIcon.classList.toggle('hidden');
};

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

sunIcon.addEventListener('click', () => {
  themeSwitch();
});

moonIcon.addEventListener('click', () => {
  themeSwitch();
});

themeCheck();

sunIcon.addEventListener('hover', () => {
  sunIcon.classList.add('fill-white')
})

moonIcon.addEventListener('mouseover', () => {
  moonIcon.classList.add('fill-white')
})

moonIcon.addEventListener('mouseout', () =>{
  moonIcon.classList.remove('fill-white')
})