const divQuadrado = document.querySelector('.quadrado');
const btn = document.querySelector('#adicionar-remover')
// divQuadrado.addEventListener('mouseenter', () => {
//     divQuadrado.style.trasition = '2s'
//     divQuadrado.style.animationName = 'rotacionar';
//     divQuadrado.style.animationDuration =  '2s';
//     divQuadrado.style.animationIterationCount = 'infinite';
// });

// divQuadrado.addEventListener('mouseout', () => {
//     divQuadrado.style.animationName = '';
//     divQuadrado.style.animationDuration = '';
//     divQuadrado.style.animationIterationCount = '';
// })

btn.addEventListener('click', () => {
    // if (divQuadrado.classList.contains('vermelho')){
    //     divQuadrado.classList.remove('vermelho');
    // } else {
    //     divQuadrado.classList.add('vermelho');
    // }
    divQuadrado.classList.toggle('vermelho')

});