fetch('https://viacep.com.br/ws/35700385/json/', {
    method: 'GET',
}).then((resposta) => {
    return resposta.json()
}).then((dados) => {
    console.log(dados)
});