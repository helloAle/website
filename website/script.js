const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup = document.querySelector('.login-popup');
const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

loginPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});