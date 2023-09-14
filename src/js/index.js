const chk = document.getElementById('chk');
const logo = document.getElementById('logo');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  if (chk.checked) {
    logo.src = 'src/imagens/logo-black.png';
  } else {
    logo.src = 'src/imagens/logo-white.png';
  }
});


'use strict';
function typeWriter(el, textArray, index) {
  if (index < textArray.length) {
    el.innerHTML += textArray[index];
    setTimeout(() => typeWriter(el, textArray, index + 1), 150);
  } else {
    setTimeout(() => {
      el.innerHTML = ''; 
      typeWriter(el, textArray, 0); 
    }, 1000); 
  }
}


const elementEl = document.getElementById('elementEl');
const text = elementEl.innerHTML;
elementEl.innerHTML = ''; 
typeWriter(elementEl, text.split(''), 0); 



window.addEventListener("scroll", () => {
  const scrollToTop = document.getElementById("scrollToTop");
  const footer = document.querySelector("footer");
  const scrollPosition = window.scrollY + window.innerHeight;
  if (scrollPosition >= footer.offsetTop) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

