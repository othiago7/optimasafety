const botaoMenu = document.querySelector('.ph-list')
const menu = document.querySelector ('.menu-lateral')
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

