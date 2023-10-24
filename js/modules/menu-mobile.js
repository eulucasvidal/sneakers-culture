export default function initMenuMobile(){
    const botaoInterativo = document.querySelector('[data-menu="button"]');
    const menuSuave = document.querySelector('[data-menu="suave"]');

    function menuAtivo(event){
        botaoInterativo.classList.toggle('ativo');
        menuSuave.classList.toggle('ativo');
    }
    botaoInterativo.addEventListener("click", menuAtivo);
}