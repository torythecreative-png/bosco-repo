const mobileMenu=document.getElementById('menu-top');
const navLinks=document.querySelector('.nav-links');
mobileMenu.addEventListener ('click', ()=>{
    navLinks.classList.toggle('active');
})