const scrollIcon = document.querySelector('.scroll__top');
const svgPath = document.querySelector('.scroll__top-svg-path');
const pathLength = svgPath.getTotalLength();

svgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
svgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// upDateDashoffset
const upDateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;
  svgPath.style.strokeDashoffset = dashoffset;
};

// scroll
window.addEventListener('scroll', () => {
  upDateDashoffset();
  if (getTop() > 800) {
    scrollIcon.classList.add('scroll__top--active');
  } else {
    scrollIcon.classList.remove('scroll__top--active');
  }
});
// click
scrollIcon.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});