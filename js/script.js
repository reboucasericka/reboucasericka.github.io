/* O objetivo é tornar o menu hambúrguer interativo, transformando-o em um "X" ao ser clicado, e alternando a visibilidade do menu de navegação.
 transformar o menu hamburgeur em um X*/
/* criar uma const para receber do html uma class. menuhmabuguer. o vai adcionar um evento de clique criar uma função e retornar  */

//SELECIONA O ELEMENTO DO MENU HAMÚRGUER NO HTML
const menuHamburguer = document. querySelector ('.menu-hamburguer')
// ADICIONA UM VENETO DE CLIQUE AO MENU HAMBURGUER
menuHamburguer.addEventListener('click', () => {
//CHAMA A FUNÇÃO toggleMenu ao clicar
    toggleMenu(); 
});
// função que alterna a visibilidade do menu de navegação e mudda o ícone do menu hamburguer
function toggleMenu()  {
//seleciona o elemento do menu de navehação do menu hamburguer
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');
//VERIFICA E O MENU CONTÉM A CLASSE 'CHANGE'
    if (menuHamburguer.classList.contains('change')) {
//SE SIM, EXIBE O MENU DE NAVEGAÇÃO
        nav.computedStyleMap.display = 'block';
    } else {
//SE NÃO, ESCONDE O MENU DE NAVEGAÇÃO
        nav.computedStyleMap.display = 'none';
    }
}