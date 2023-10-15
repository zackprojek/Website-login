const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login-popup');
const iconclose = document.querySelector('.close');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});