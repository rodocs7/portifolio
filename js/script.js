/*  turns the menu hamburguer into a X ==== */

const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {

    toggleMenu();
});


function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');


    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}

// document.querySelectorAll('.btn').forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('Button clicked!'); // Adicione este log para verificar

//         const serviceBox = button.closest('.services-box');
//         serviceBox.classList.toggle('expanded');

//         if (serviceBox.classList.contains('expanded')) {
//             button.textContent = 'Leia menos';
//         } else {
//             button.textContent = 'Leia mais';
//         }
//     });
// });


class contact {}