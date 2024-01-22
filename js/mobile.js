const mobile = document.querySelector('.backdrop-mobile');
const mobileBtnOpen = document.querySelector('.mobile-btn-open'); 
const mobileBtnClose = document.querySelector('.mobile-btn-close');

const toggleMobile = () => mobile.classList.toggle('is-hidden');

mobileBtnOpen.addEventListener('click', toggleMobile);
mobileBtnClose.addEventListener('click', toggleMobile);