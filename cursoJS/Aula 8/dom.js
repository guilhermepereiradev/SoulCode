// Array.from(document.getElementsByTagName('button'))

// let btn = document.getElementsByTagName('button')[0]; //coleção
// console.log(btn)

//  btn.onclick = function() {
//     alert("Você clicou em mum")
// }

// btn.addEventListener('click', () => {
//     alert('Você clicou em mim');
// })

// let ps = document.getElementsByTagName('p');
// let diferente = document.getElementsByClassName('diferente');
// let name = document.getElementsByName('name');
// let id = document.getElementById("");

// let botao = document.querySelector('[name="para"]');
// let p  = document.querySelectorAll('')

let valoresAPI = ['Amanda', 'André', 'Andrew', 'Antonio', 'Aurelio', 'Manuela'];
const div = document.getElementById('lista');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const ul = document.createElement('ul');
    for (let i of valoresAPI) {
        const li = document.createElement('li');
        li.innerText = i;
        ul.appendChild(li);
    }
    div.appendChild(ul);
});