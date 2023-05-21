const allNavElements = document.querySelector('.nav-ul');

const newNavElement2 = document.createElement('a');
newNavElement2.href = '#location';
newNavElement2.textContent = 'Location';

const newNavOrder2 = document.createElement('li');
newNavOrder2.append(newNavElement2);
allNavElements.append(newNavOrder2);

function slidesPlugin(activeSlide) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();

      slide.classList.add('active');
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slidesPlugin(4);

TELEGRAM_URL = 'https://t.me/spartaksburger';
const tgUrl = document.querySelector('.logo');
const imgUrl = tgUrl.querySelector('img');

const createLogoUrl = document.createElement('a');
createLogoUrl.className = 'logo-href';
createLogoUrl.href = TELEGRAM_URL;
createLogoUrl.target = '_blank';

createLogoUrl.append(imgUrl);
tgUrl.append(createLogoUrl);
