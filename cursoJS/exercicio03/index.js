const btn = document.querySelector('#btn');
const apagada = document.querySelector('.apagada');
const acessa = document.querySelector('.acessa');

console.log(btn);

btn.addEventListener('click', () => {
    apagada.classList.toggle('troca');
    acessa.classList.toggle('troca');
});