const cepForm = document.querySelector('#cep-form')

cepForm.addEventListener('submit', (event) =>{
    event.preventDefault(); //impede o form de ser enviado
    event.stopPropagation(); //impede que os valores de objetos sejam modificados
    
    const inputCep = event.target[0];
    const cep = inputCep.value;
    
    let endereco = fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
    }).then((resposta) => {
        return resposta.json()
    }).then((dados) => {
       return dados;
    });
    console.log(endereco)

    //event.target.submit() // continua o envio do form
});