const cepForm = document.querySelector('#cep-form')

cepForm.addEventListener('submit', (event) =>{
    event.preventDefault(); //impede o form de ser enviado
    event.stopPropagation(); //impede que os valores de objetos sejam modificados

    const cep = event.target[0];
    let search = cep.value.replace('-', '');
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    const mostrarDados = (result) => {
        for (const campo in result) {
            if(document.querySelector('#'+campo)){
                document.querySelector('#'+campo).value = result[campo];
            }
        }
    }
        
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(resposta => { resposta.json()
            .then(dados => mostrarDados(dados))})
        .catch(e => console.log(`Erro${e.message}`))
    
    //event.target.submit() // continua o envio do form
});